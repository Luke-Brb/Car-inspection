import { auth } from "../FirebaseContext";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

export async function handleSubmit(
  vinNumber,
  brand,
  model,
  mileage,
  cabinAirFilter,
  engineAirFilter,
  engineOilFilter,
  fuelFilter,
  gearboxOilFilter,
  transferCaseFilter,
  observations,
  engineOil,
  gearboxOil,
  transferCaseOil,
  user
) {
  const db = getFirestore();
  const vinNumberCollection = collection(db, "vin_number");
  try {
    const newDoc = await addDoc(vinNumberCollection, {
      vin_number: { vinNumber },
      carType: {
        brand,
        model,
        mileage,
      },
      filters: {
        cabinAirFilter,
        engineAirFilter,
        engineOilFilter,
        fuelFilter,
        gearboxOilFilter,
        transferCaseFilter,
      },
      miscellaneous: {
        observations,
      },
      oils: {
        engineOil,
        gearboxOil,
        transferCaseOil,
      },
      userId: user.uid,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

export async function handleList(user, setDocuments) {
  const db = getFirestore();
  const filterdQuery = query(
    collection(db, "vin_number"),
    where("userId", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  const querySnapshot = await getDocs(filterdQuery);
  const documents = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setDocuments(documents);
}

export async function deleteList(docId) {
  const db = getFirestore();
  const docRef = doc(db, "vin_number", docId);
  await deleteDoc(docRef);
}

export function handleLogout(navigate) {
  auth.signOut();
  navigate("/login");
}
