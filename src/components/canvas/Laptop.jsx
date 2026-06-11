import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const SCREEN_MATERIAL = "sfCQkHOWyrsLmor";
const SCREEN_GLASS_MATERIAL = "ZCDwChwkbBfITSW";

function fitTextureToScreen(mesh, texture) {
  const uv = mesh.geometry.attributes.uv;
  if (!uv) return;

  let minU = 1;
  let minV = 1;
  let maxU = 0;
  let maxV = 0;

  for (let i = 0; i < uv.count; i++) {
    minU = Math.min(minU, uv.getX(i));
    maxU = Math.max(maxU, uv.getX(i));
    minV = Math.min(minV, uv.getY(i));
    maxV = Math.max(maxV, uv.getY(i));
  }

  const uvWidth = maxU - minU;
  const uvHeight = maxV - minV;
  const uvAspect = uvWidth / uvHeight;
  const texAspect = texture.image.width / texture.image.height;

  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  let repeatX = 1 / uvWidth;
  let repeatY = 1 / uvHeight;
  let offsetX = -minU / uvWidth;
  let offsetY = -minV / uvHeight;

  if (texAspect > uvAspect) {
    const crop = texAspect / uvAspect;
    repeatX *= crop;
    offsetX -= (crop - 1) / (2 * uvWidth);
  } else {
    const crop = uvAspect / texAspect;
    repeatY *= crop;
    offsetY -= (crop - 1) / (2 * uvHeight);
  }

  texture.repeat.set(repeatX, repeatY);
  texture.offset.set(offsetX, offsetY);
}

const Laptop = ({ isMobile }) => {
  const laptop = useGLTF("/models/macbook-transformed.glb");
  const screenTexture = useTexture("/textures/laptop-screen.png");
  const meshRef = useRef();

  useEffect(() => {
    screenTexture.flipY = false;
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    laptop.scene.traverse((child) => {
      if (!child.isMesh) return;

      if (child.material?.name === SCREEN_GLASS_MATERIAL) {
        child.visible = false;
        return;
      }

      if (child.material?.name === SCREEN_MATERIAL) {
        fitTextureToScreen(child, screenTexture);

        child.material = new THREE.MeshBasicMaterial({
          map: screenTexture,
          toneMapped: false,
        });
      }
    });
  }, [laptop.scene, screenTexture]);

  useFrame((state, delta) => {
    if (meshRef.current && isMobile) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={laptop.scene}
        scale={isMobile ? 0.08 : 0.1}
        position={isMobile ? [0, -1.5, 0] : [0, -1.8, 0]}
        rotation={isMobile ? [0.1, 0, 0] : [0.1, -0.25, 0]}
      />
    </mesh>
  );
};

const LaptopCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      style={{ background: "#fff" }}
      camera={
        isMobile
          ? { position: [0, 0, 12], fov: 45 }
          : { position: [8, 2, 8], fov: 30 }
      }
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
          />
        )}
        <Laptop isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

useGLTF.preload("/models/macbook-transformed.glb");
useTexture.preload("/textures/laptop-screen.png");

export default LaptopCanvas;
