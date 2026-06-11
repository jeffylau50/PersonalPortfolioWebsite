import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { sceneState } from "./sceneState";

const MATCAP_MAP = {
  black: "matcapBlack",
  gray: "matcapGray",
  skin: "matcapSkin",
  white: "matcapWhite",
};

function createMatcapMaterial(texture) {
  const material = new THREE.MeshMatcapMaterial({
    matcap: texture,
    toneMapped: false,
  });
  return material;
}

function DavidAvatar({ gltf, textures }) {
  const groupRef = useRef();
  const mixerRef = useRef();
  const actionsRef = useRef({});

  const mesh = useMemo(() => {
    if (!gltf?.scene?.children?.length) return null;

    const source = gltf.scene.children[0];
    const clone = cloneSkeleton(source);

    clone.traverse((child) => {
      if (!child.isMesh) return;

      const matcapKey = MATCAP_MAP[child.name];
      if (matcapKey && textures[matcapKey]) {
        child.material = createMatcapMaterial(textures[matcapKey]);
      } else if (child.name === "head" && textures.head) {
        child.material = new THREE.MeshBasicMaterial({
          map: textures.head,
          transparent: true,
          toneMapped: false,
        });
      } else if (child.name === "face") {
        child.visible = false;
      } else {
        child.material = createMatcapMaterial(textures.matcapGray || textures.matcapBlack);
      }

      child.frustumCulled = false;
    });

    const brain = clone.getObjectByName("brain");
    if (brain) clone.remove(brain);

    return clone;
  }, [gltf, textures]);

  useEffect(() => {
    if (!mesh || !gltf?.animations?.length) return undefined;

    const mixer = new THREE.AnimationMixer(mesh);
    mixerRef.current = mixer;

    const idle = mixer.clipAction(gltf.animations.find((a) => a.name === "idle"));
    const tIdle = mixer.clipAction(gltf.animations.find((a) => a.name === "t-idle"));

    if (idle) {
      idle.loop = THREE.LoopPingPong;
      idle.play();
    }
    if (tIdle) {
      tIdle.loop = THREE.LoopPingPong;
      tIdle.play();
      tIdle.weight = 0;
    }

    actionsRef.current = { idle, tIdle };
    return () => mixer.stopAllAction();
  }, [mesh, gltf]);

  useFrame((_, delta) => {
    if (!groupRef.current || !mesh) return;

    groupRef.current.position.set(
      sceneState.avatarPosition.x,
      sceneState.avatarPosition.y,
      sceneState.avatarPosition.z
    );
    groupRef.current.rotation.set(
      sceneState.avatarRotation.x,
      sceneState.avatarRotation.y,
      sceneState.avatarRotation.z
    );

    const { idle, tIdle } = actionsRef.current;
    const t = sceneState.tIdleIntensity;
    if (idle) idle.weight = 1 - t;
    if (tIdle) tIdle.weight = t;

    mixerRef.current?.update(delta);
  });

  if (!mesh) return null;

  return (
    <group ref={groupRef}>
      <primitive object={mesh} />
    </group>
  );
}

export default DavidAvatar;
