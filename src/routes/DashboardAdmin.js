import React, { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../FirebaseContext";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/APIConnector";

function DashboardAdmin() {
  const { user } = useContext(FirebaseContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userDocs = await getDocs(usersCollection);
      const userList = userDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  async function handleRoleChange(uid, isAdmin) {
    try {
      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, { isAdmin });
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === uid ? { ...user, isAdmin } : user))
      );
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  }

  async function handleDeleteUser(uid) {
    try {
      await fetch(`http://localhost:5000/users/${uid}`, {
        method: "DELETE",
      });
      const userRef = doc(db, "users", uid);
      await deleteDoc(userRef);
      setUsers(users.filter((u) => u.id !== uid));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function logout() {
    handleLogout(navigate);
  }

  return (
    <>
      <Navbar user={user} />
      <div className="container mt-5">
        <h2>User Management</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={user.isAdmin}
                      onChange={() => handleRoleChange(user.id, !user.isAdmin)}
                    />
                  </td>
                  <td>
                    <button
                      className="bg-warning text-dark btn btn-secondary btn-sm"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          className="bg-info text-dark btn btn-secondary btn-sm me-2"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default DashboardAdmin;
