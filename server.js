const express = require("express");
const User = require("./db.js").collection;
const Register = require("./db.js").reg1;  // Assuming you've changed the schema to include additional fields and renamed the collection to 'User'
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

app.post("/Register", async (req, res) => {
  const { name, dob, phoneNumber, studentId, collegeName,} = req.body; 

  const RegisterData = {
    name: name,
    dob: dob,
    phoneNumber: phoneNumber,
    studentId: studentId,
    collegeName: collegeName,
  };

  try {
    const check = await Register.findOne({ studentId: studentId });

    if (check) {
      res.json("Already reg");
    } else {
      await Register.create(RegisterData); 

      res.json("notreg");
    }
  } catch (e) {
    res.json("fail");ṇ
  }
});

app.get("/Admin", async (req, res) => {
  try {
    // Assume you have admin authentication middleware to verify admin access
    const isAdmin = true;  // Set isAdmin to true if admin authentication is successful

    if (isAdmin) {
      const users = await User.find();  // Fetch all users
      res.json(users);
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("port connected");
});

