import { useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { sceneState } from "./sceneState";

const ASSETS = {
  models: {
    avatar: "/models/david/avatar.glb",
    room: "/models/david/room.glb",
    lab: "/models/david/lab.glb",
  },
  textures: {
    room: "/textures/david/room.webp",
    desktops: "/textures/david/desktops.webp",
    head: "/textures/david/head.webp",
    face: "/textures/david/face-spritesheet.png",
    matcapBlack: "/textures/david/matcap-black.webp",
    matcapGray: "/textures/david/matcap-gray.webp",
    matcapSkin: "/textures/david/matcap-skin.webp",
    matcapWhite: "/textures/david/matcap-white.webp",
    roomShadow: "/textures/david/room-shadow.webp",
    numbersBitmap: "/textures/david/numbers-bitmap.webp",
  },
};

let cachedItems = null;
let loadPromise = null;

export function resetDavidAssetCache() {
  cachedItems = null;
  loadPromise = null;
}
const progressListeners = new Set();

function notifyProgress(value) {
  sceneState.loadProgress = value;
  progressListeners.forEach((listener) => listener(value));
}

function loadTexture(path) {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      path,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        resolve(texture);
      },
      undefined,
      reject
    );
  });
}

function loadModel(path) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.load(path, resolve, undefined, reject);
  });
}

async function loadAllAssets() {
  if (cachedItems) {
    notifyProgress(1);
    return cachedItems;
  }

  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    const items = { models: {}, textures: {} };
    const entries = [
      ...Object.entries(ASSETS.textures).map(([key, path]) => ({
        key,
        path,
        type: "texture",
      })),
      ...Object.entries(ASSETS.models).map(([key, path]) => ({
        key,
        path,
        type: "model",
      })),
    ];

    let loaded = 0;
    const total = entries.length;
    notifyProgress(0);

    await Promise.all(
      entries.map(async ({ key, path, type }) => {
        try {
          if (type === "texture") {
            items.textures[key] = await loadTexture(path);
          } else {
            items.models[key] = await loadModel(path);
          }
        } catch (error) {
          console.error(`Failed to load asset: ${path}`, error);
          throw error;
        } finally {
          loaded += 1;
          notifyProgress(loaded / total);
        }
      })
    );

    cachedItems = items;
    sceneState.isLoaded = true;
    notifyProgress(1);
    return items;
  })();

  return loadPromise;
}

export function useDavidAssets() {
  const [progress, setProgress] = useState(cachedItems ? 1 : 0);
  const [items, setItems] = useState(cachedItems);
  const [ready, setReady] = useState(!!cachedItems);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onProgress = (value) => setProgress(value);
    progressListeners.add(onProgress);

    if (cachedItems) {
      setProgress(1);
      setItems(cachedItems);
      setReady(true);
    } else {
      loadAllAssets()
        .then((loaded) => {
          setItems(loaded);
          setReady(true);
          setProgress(1);
        })
        .catch((err) => {
          console.error("Failed to load David portfolio assets", err);
          setError(err);
        });
    }

    return () => {
      progressListeners.delete(onProgress);
    };
  }, []);

  return { progress, items, ready, error };
}

export { ASSETS };
