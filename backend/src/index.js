import mongoose from "mongoose";
import connectDB from "./config/database.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

startServer();
