import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

export default function Viewer({ modelUrl, bgColor, wireframe }) {
  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      style={{ height: "100vh", background: bgColor }}
    >
      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Model */}
      {modelUrl && (
        <Suspense fallback={null}>
          <Model url={modelUrl} wireframe={wireframe} />
        </Suspense>
      )}

      <OrbitControls enablePan enableZoom enableRotate />
    </Canvas>
  );
}