import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  if (!mongoUri) {
    console.error("❌ CRITICAL: MONGO_URI environment variable is missing or empty!");
    return;
  }

  // Clean URI: remove accidental quotes or whitespace
  const cleanUri = mongoUri.trim().replace(/^["']|["']$/g, "");

  try {
    await mongoose.connect(cleanUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Connected successfully to MongoDB Atlas!");
  } catch (err) {
    console.error("❌ Problem while connecting to MongoDB:", err.message);
  }
};

export default connectDB;
