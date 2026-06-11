import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { sceneState } from "./sceneState";
import DavidDesktops from "./DavidDesktops";

const SKIP_PARTS = new Set(["shadow-catcher", "desktop-plane-0", "desktop-plane-1"]);

function DavidRoom({ gltf, roomTexture, shadowTexture, desktopsTexture }) {
  const groupRef = useRef();
  const chairRef = useRef();

  const roomGroup = useMemo(() => {
    if (!gltf || !roomTexture) return null;

    const group = new THREE.Group();
    const roomMaterial = new THREE.MeshBasicMaterial({
      map: roomTexture,
      toneMapped: false,
    });

    gltf.scene.children.forEach((child) => {
      if (SKIP_PARTS.has(child.name)) return;

      const applyMaterial = (mesh) => {
        mesh.material = roomMaterial;
        mesh.frustumCulled = false;
        if (mesh.name === "carpet") mesh.renderOrder = -10;
      };

      if (child.isMesh) {
        applyMaterial(child);
        if (child.name === "chair") chairRef.current = child;
        group.add(child);
        return;
      }

      child.traverse((node) => {
        if (node.isMesh) applyMaterial(node);
      });
      group.add(child);
    });

    if (shadowTexture) {
      const shadowMesh = gltf.scene.children.find((child) => child.name === "shadow-catcher");
      if (shadowMesh?.isMesh) {
        shadowMesh.material = new THREE.MeshBasicMaterial({
          map: shadowTexture,
          transparent: true,
          depthWrite: false,
          toneMapped: false,
        });
        shadowMesh.renderOrder = -1000;
        shadowMesh.frustumCulled = false;
        group.add(shadowMesh);
      }
    }

    return group;
  }, [gltf, roomTexture, shadowTexture]);

  useFrame(() => {
    if (!groupRef.current) return;

    groupRef.current.visible = sceneState.weights.hero > 0.001;
    groupRef.current.scale.setScalar(sceneState.roomScale);
    groupRef.current.position.set(
      sceneState.roomPosition.x,
      sceneState.roomPosition.y,
      sceneState.roomPosition.z
    );
    groupRef.current.rotation.set(
      sceneState.roomRotation.x,
      sceneState.roomRotation.y,
      sceneState.roomRotation.z
    );

    if (chairRef.current) {
      chairRef.current.rotation.set(
        sceneState.chairRotation.x,
        sceneState.chairRotation.y,
        sceneState.chairRotation.z
      );
    }
  });

  if (!roomGroup) return null;

  return (
    <group ref={groupRef}>
      <primitive object={roomGroup} />
      <DavidDesktops gltf={gltf} desktopsTexture={desktopsTexture} />
    </group>
  );
}

export default DavidRoom;
