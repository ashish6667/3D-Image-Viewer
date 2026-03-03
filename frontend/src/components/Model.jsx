import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Model({ url, wireframe }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.wireframe = wireframe;
      }
    });
  }, [wireframe, scene]);

  return <primitive object={scene} scale={1} />;
}