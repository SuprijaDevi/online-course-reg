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

// Define a unique index on the email field for efficient validation
// Define a model for the user schema
const collection = mongoose.model("collection", newSchema);

module.exports = collection