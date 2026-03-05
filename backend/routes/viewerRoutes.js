import express from "express";
import ViewerSettings from "../models/ViewerSettings.js";

const router = express.Router();

/* ================= SAVE SETTINGS ================= */
router.post("/save", async (req, res) => {
  try {
    const { backgroundColor, wireframe } = req.body;

    const settings = new ViewerSettings({
      backgroundColor,
      wireframe,
    });

    await settings.save();

    res.status(201).json({
      message: "Settings saved successfully",
      data: settings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= GET LATEST SETTINGS ================= */
router.get("/latest", async (req, res) => {
  try {
    const settings = await ViewerSettings.findOne().sort({
      createdAt: -1,
    });

    res.status(200).json(settings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;