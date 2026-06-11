import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import DavidRoom from "./DavidRoom";
import DavidLab from "./DavidLab";
import DavidAvatar from "./DavidAvatar";
import DavidCamera from "./DavidCamera";

function DavidCanvas({ items }) {
  if (!items) return null;

  const { models, textures } = items;

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ fov: 38, near: 0.01, far: 100, position: [0, 8.2, 16] }}
      gl={{
        antialias: true,
        alpha: false,
        toneMapping: THREE.NoToneMapping,
      }}
      style={{ background: "#efe4d3" }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
      }}
    >
      <color attach="background" args={["#efe4d3"]} />
      <DavidRoom
        gltf={models.room}
        roomTexture={textures.room}
        shadowTexture={textures.roomShadow}
        desktopsTexture={textures.desktops}
      />
      <DavidLab gltf={models.lab} roomTexture={textures.room} />
      <DavidAvatar gltf={models.avatar} textures={textures} />
      <DavidCamera />
    </Canvas>
  );
}

export default DavidCanvas;
