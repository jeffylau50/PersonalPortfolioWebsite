import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { getWeightedCamera, sceneState } from "./sceneState";

function DavidCamera() {
  const { camera, size } = useThree();
  const focusRef = useRef(new THREE.Vector3(0, 3, 0));

  useFrame(() => {
    const isLandscape = size.width > size.height && size.width >= 768;
    const { position, focus } = getWeightedCamera(isLandscape);

    camera.position.lerp(new THREE.Vector3(...position), 0.08);
    focusRef.current.lerp(new THREE.Vector3(...focus), 0.08);

    if (sceneState.weights.about > 0) {
      camera.position.y -= sceneState.sceneInOut.about.out * 2.75;
    }

    camera.lookAt(focusRef.current);
  });

  return null;
}

export default DavidCamera;
