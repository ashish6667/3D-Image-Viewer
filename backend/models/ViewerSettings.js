import mongoose from "mongoose";

const viewerSettingsSchema = new mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      required: true,
    },
    wireframe: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ViewerSettings", viewerSettingsSchema);