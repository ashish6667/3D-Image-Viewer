import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";

export default function Viewer({ modelUrl, bgColor, wireframe }) {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{
        width: "100%",
        height: "100%",
        background: bgColor || "#111827",
      }}
    >
      {/* ===== Lighting ===== */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
      />

      {/* Environment Lighting */}
      <Environment preset="city" />

      {/* ===== Model ===== */}
      {modelUrl && (
        <Suspense fallback={null}>
          <Model url={modelUrl} wireframe={wireframe} />
        </Suspense>
      )}

      {/* ===== Controls ===== */}
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        makeDefault
      />
    </Canvas>
  );
}