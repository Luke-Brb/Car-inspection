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
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// Endpoint to delete a user
app.delete("/users/:uid", async (req, res) => {
  const uid = req.params.uid;
  try {
    await admin.auth().deleteUser(uid); 
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
