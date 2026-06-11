import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "./sceneState";

function DavidLab({ gltf, roomTexture }) {
  const groupRef = useRef();

  const labScene = useMemo(() => {
    if (!gltf || !roomTexture) return null;

    const material = new THREE.MeshBasicMaterial({
      map: roomTexture,
      toneMapped: false,
    });

    const group = new THREE.Group();
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.frustumCulled = false;
      }
    });
    group.add(gltf.scene);
    return group;
  }, [gltf, roomTexture]);

  useFrame(() => {
    if (!groupRef.current) return;
    const weight = sceneState.weights.about1 + sceneState.weights.about2;
    groupRef.current.visible = weight > 0.001;
    groupRef.current.position.set(
      sceneState.labPosition.x,
      sceneState.labPosition.y,
      sceneState.labPosition.z
    );
  });

  if (!labScene) return null;
  return <primitive ref={groupRef} object={labScene} />;
}

export default DavidLab;
