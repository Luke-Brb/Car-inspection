const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Firebase Admin SDK
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(
  cors({
    // cors is use for the security for cross domain HTTP requests (no usage for local domain)
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Endpoint to delete a user
app.delete("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  console.log("Received request to delete user:", uid); // Log the UID
  try {
    await admin.auth().deleteUser(uid); // Delete the user from Firebase Authentication
    console.log("User  deleted successfully:", uid); // Log success
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
