const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/coursereg", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // Handle connection errors gracefully (e.g., retry logic, exit process)
  }
}

connectToDatabase();
const reg1Schema =new mongoose.Schema({
name: {
  type: String,
  required: true,
},
dob: {
  type: Date,
  required: true,
},
phoneNumber: {
  type: String,
  required: true,
},
studentId:{
  type: String,
  required: true,
  unique: true,
},
collegeName:{
  type: String,
  required: true,
},
});
const reg1 = mongoose.model("reg1", reg1Schema);


const newSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
  password: {
    type: String,
    required: true,
  },
  password1: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);
module.exports = {collection,reg1};