import { useEffect } from "react";
import API from "../api";

export default function ControlsPanel({
  setModelUrl,
  setBgColor,
  bgColor,
  wireframe,
  setWireframe,
}) {
  /* ================= LOAD SAVED SETTINGS ================= */
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const { data } = await API.get("/api/viewer/latest");

        if (data) {
          setBgColor(data.backgroundColor);
          setWireframe(data.wireframe);
        }
      } catch (error) {
        console.error("Error loading settings:", error);
      }
    };

    loadSettings();
  }, [setBgColor, setWireframe]);

  /* ================= SAVE SETTINGS ================= */
  const saveSettings = async (color, wire) => {
    try {
      await API.post("/api/viewer/save", {
        backgroundColor: color,
        wireframe: wire,
      });
    } catch (error) {
      console.error("Error saving settings:", error);
    }
  };

  /* ================= FILE UPLOAD ================= */
  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file && (file.name.endsWith(".glb") || file.name.endsWith(".gltf"))) {
      const url = URL.createObjectURL(file);
      setModelUrl(url);
    } else {
      alert("Please upload a valid .glb or .gltf file");
    }
  };

  return (
    <div className="space-y-6 max-h-[70vh] md:max-h-full overflow-y-auto pr-1">

      {/* ================= SAMPLE MODELS ================= */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md">
        <label className="block text-sm font-medium mb-3">
          Sample Models
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2">
          <button
            onClick={() => setModelUrl("/DamagedHelmet.glb")}
            className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-all duration-200 active:scale-95"
          >
            Helmet
          </button>

          <button
            onClick={() => setModelUrl("/Duck.glb")}
            className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm transition-all duration-200 active:scale-95"
          >
            Duck
          </button>

          <button
            onClick={() => setModelUrl("/BoomBox.glb")}
            className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm transition-all duration-200 active:scale-95"
          >
            BoomBox
          </button>
        </div>
      </div>

      {/* ================= UPLOAD MODEL ================= */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md">
        <label className="block text-sm font-medium mb-3">
          Upload 3D Model
        </label>

        <input
          type="file"
          accept=".glb,.gltf"
          onChange={handleUpload}
          className="block w-full text-sm text-gray-300
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-600 file:text-white
                     hover:file:bg-blue-700
                     cursor-pointer"
        />
      </div>

      {/* ================= BACKGROUND COLOR ================= */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md">
        <label className="block text-sm font-medium mb-3">
          Background Color
        </label>

        <input
          type="color"
          value={bgColor}
          onChange={async (e) => {
            const color = e.target.value;
            setBgColor(color);
            await saveSettings(color, wireframe);
          }}
          className="w-full h-12 rounded-lg cursor-pointer"
        />
      </div>

      {/* ================= WIREFRAME ================= */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md flex items-center justify-between">
        <span className="text-sm font-medium">
          Wireframe Mode
        </span>

        <input
          type="checkbox"
          checked={wireframe}
          onChange={async (e) => {
            const value = e.target.checked;
            setWireframe(value);
            await saveSettings(bgColor, value);
          }}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />
      </div>
    </div>
  );
}