const express = require("express");
const User = require("./db.js"); // Assuming you've changed the schema to include additional fields and renamed the collection to 'User'
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  // Handle GET requests if needed
});

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/Signup", async (req, res) => {
  const { username, mobile, email, password, password1 } = req.body; // Include additional fields

  const userData = {
    username: username,
    mobile: mobile,
    email: email,
    password: password,
    password1: password1,
  };

  try {
    const check = await User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      await User.create(userData); // Insert user data directly

      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("port connected");
});

