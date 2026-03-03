import { useState } from "react";
import Viewer from "./components/Viewer";
import ControlsPanel from "./components/ControlsPanel";

function App() {
  const [modelUrl, setModelUrl] = useState(null);
  const [bgColor, setBgColor] = useState("#111827");
  const [wireframe, setWireframe] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      
      {/* Sidebar */}
      <div className="w-72 bg-gray-800 border-r border-gray-700 p-6 flex flex-col">
        
        <h1 className="text-2xl font-bold mb-8 tracking-wide">
          3D Product Viewer
        </h1>

        <ControlsPanel
          setModelUrl={setModelUrl}
          setBgColor={setBgColor}
          wireframe={wireframe}
          setWireframe={setWireframe}
        />

        <div className="mt-auto text-xs text-gray-400 pt-8">
          MERN + Three.js Assignment
        </div>

      </div>

      {/* Viewer Area */}
      <div className="flex-1">
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