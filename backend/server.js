import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import viewerRoutes from "./routes/viewerRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/viewer", viewerRoutes);

const PORT = process.env.PORT || 5000;

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    // Only listen locally
    if (process.env.NODE_ENV !== "production") {
      app.listen(PORT, () =>
        console.log(`Server running on port ${PORT}`)
      );
    }
  })
  .catch((err) => console.log(err));

// Export for Vercel
export default app;