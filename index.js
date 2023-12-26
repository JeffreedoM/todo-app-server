import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// CONNECTION
const DB_CONNECTION = process.env.DB_CONNECTION;
const PORT = process.env.PORT;

mongoose
  .connect(DB_CONNECTION)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// routes
import todoRoutes from "./routes/TodoRoutes.js";
app.use("/", todoRoutes);
