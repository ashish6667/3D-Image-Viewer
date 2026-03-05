import { useState } from "react";
import Viewer from "./components/Viewer";
import ControlsPanel from "./components/ControlsPanel";

function App() {
  const [modelUrl, setModelUrl] = useState(null);
  const [bgColor, setBgColor] = useState("#111827");
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-900 text-gray-100">

      {/* Sidebar */}
      <div className="w-full md:w-80 bg-gray-800 border-b md:border-b-0 md:border-r border-gray-700 p-6">

        <h1 className="text-xl md:text-2xl font-bold mb-6">
          3D Product Viewer
        </h1>

        <ControlsPanel
          setModelUrl={setModelUrl}
          setBgColor={setBgColor}
          wireframe={wireframe}
          setWireframe={setWireframe}
        />

        <div className="mt-8 text-xs text-gray-400">
          MERN + Three.js Assignment
        </div>
      </div>

      {/* Viewer Area */}
      <div className="flex-1 h-[60vh] md:h-screen">
        <Viewer
          modelUrl={modelUrl}
          bgColor={bgColor}
          wireframe={wireframe}
        />
      </div>
    </div>
  );
}

export default App;