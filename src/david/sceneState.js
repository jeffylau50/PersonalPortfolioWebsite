export const sceneState = {
  aboutProgress: 0,
  sectionsProgress: 0,
  tIdleIntensity: 0,
  loadProgress: 0,
  isLoaded: false,
  sceneInOut: {
    hero: { in: 1, out: 0 },
    about: { in: 0, out: 0 },
    about1: { in: 0, out: 0 },
    about2: { in: 0, out: 0 },
  },
  weights: {
    hero: 1,
    about: 0,
    about1: 0,
    about2: 0,
  },
  avatarPosition: { x: 0, y: 0, z: 0 },
  avatarRotation: { x: 0, y: 0, z: 0 },
  chairRotation: { x: 0, y: 0, z: 0 },
  roomScale: 1,
  roomPosition: { x: 0, y: 0, z: 0 },
  roomRotation: { x: 0, y: -2.1, z: 0 },
  labPosition: { x: 0, y: 0, z: 6 },
};

export function updateSceneWeights() {
  const { sceneInOut, weights } = sceneState;
  Object.keys(weights).forEach((key) => {
    const io = sceneInOut[key];
    if (!io) return;
    weights[key] = Math.max(0, Math.min(1, io.in * (1 - io.out)));
  });
}

export const cameraWaypoints = {
  portrait: {
    hero: { position: [0, 8.2, 16], focus: [0, 5.2, 0] },
    about1: { position: [0, 4.75, 19.5], focus: [0, 0.8, 6] },
    about2: { position: [0, 4.75, 19.5], focus: [0, 0.8, 6] },
  },
  landscape: {
    hero: { position: [0, 6, 10], focus: [0, 3, 0] },
    about1: { position: [0, 4.5, 15.5], focus: [0, 2.2, 6] },
    about2: { position: [0, 4.5, 15.5], focus: [0, 2.2, 6] },
  },
};

export function getWeightedCamera(isLandscape) {
  const points = isLandscape ? cameraWaypoints.landscape : cameraWaypoints.portrait;
  const { weights } = sceneState;

  const entries = [
    ["hero", weights.hero],
    ["about1", weights.about1],
    ["about2", weights.about2],
  ].filter(([, w]) => w > 0);

  if (!entries.length) {
    return { position: points.hero.position, focus: points.hero.focus };
  }

  let total = 0;
  const position = [0, 0, 0];
  const focus = [0, 0, 0];

  entries.forEach(([key, weight]) => {
    const p = points[key];
    total += weight;
    position[0] += p.position[0] * weight;
    position[1] += p.position[1] * weight;
    position[2] += p.position[2] * weight;
    focus[0] += p.focus[0] * weight;
    focus[1] += p.focus[1] * weight;
    focus[2] += p.focus[2] * weight;
  });

  return {
    position: position.map((v) => v / total),
    focus: focus.map((v) => v / total),
  };
}
