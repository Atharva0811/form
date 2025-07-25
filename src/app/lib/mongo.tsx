"use server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in .env.local");
}
async function connectToDatabase() {
  try {
    const conn = await mongoose.connect(MONGODB_URI); 
    return conn;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
}

export default connectToDatabase;
