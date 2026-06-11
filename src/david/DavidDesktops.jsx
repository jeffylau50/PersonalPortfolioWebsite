import { useMemo } from "react";
import * as THREE from "three";

function DavidDesktops({ gltf, desktopsTexture }) {
  const mesh = useMemo(() => {
    if (!gltf || !desktopsTexture) return null;

    const desktop1 = gltf.scene.children.find((child) => child.name === "desktop-plane-0");
    const desktop2 = gltf.scene.children.find((child) => child.name === "desktop-plane-1");
    if (!desktop1?.isMesh || !desktop2?.isMesh) return null;

    const geometry1 = desktop1.geometry.clone();
    const geometry2 = desktop2.geometry.clone();
    geometry1.translate(desktop1.position.x, desktop1.position.y, desktop1.position.z);
    geometry2.translate(desktop2.position.x, desktop2.position.y, desktop2.position.z);

    const merged = geometry1;
    // simple: use first desktop only if merge utils unavailable
    const texture = desktopsTexture.clone();
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
    });

    const screen = new THREE.Mesh(geometry1, material);
    screen.frustumCulled = false;

    const screen2 = new THREE.Mesh(geometry2, material.clone());
    screen2.frustumCulled = false;

    const group = new THREE.Group();
    group.add(screen, screen2);
    return group;
  }, [gltf, desktopsTexture]);

  if (!mesh) return null;
  return <primitive object={mesh} />;
}

export default DavidDesktops;
