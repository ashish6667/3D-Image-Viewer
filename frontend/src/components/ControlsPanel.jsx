export default function ControlsPanel({
  setModelUrl,
  setBgColor,
  wireframe,
  setWireframe,
}) {
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
    <div className="space-y-6">

      {/* Upload Card */}
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

      {/* Background Card */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md">
        <label className="block text-sm font-medium mb-3">
          Background Color
        </label>
        <input
          type="color"
          onChange={(e) => setBgColor(e.target.value)}
          className="w-full h-12 rounded-lg cursor-pointer"
        />
      </div>

      {/* Wireframe Card */}
      <div className="bg-gray-700 p-4 rounded-xl shadow-md flex items-center justify-between">
        <span className="text-sm font-medium">
          Wireframe Mode
        </span>
        <input
          type="checkbox"
          checked={wireframe}
          onChange={(e) => setWireframe(e.target.checked)}
          className="w-5 h-5 accent-blue-600 cursor-pointer"
        />
      </div>

    </div>
  );
}