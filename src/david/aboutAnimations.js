import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { sceneState, updateSceneWeights } from "./sceneState";

gsap.registerPlugin(ScrollTrigger);

let triggers = [];

export function setupAboutAnimations(aboutEl) {
  cleanupAboutAnimations();

  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  const inTrigger = ScrollTrigger.create({
    trigger: aboutEl,
    start: isMobile ? "top bottom" : "top bottom-=200",
    end: "top top",
    scrub: true,
    onUpdate: (self) => {
      const t = self.progress;
      sceneState.sceneInOut.hero.out = t;
      sceneState.chairRotation.y = -1.1 * t;
      sceneState.chairRotation.x = -0.9 * t;
      sceneState.chairRotation.z = -1.3 * t;
      sceneState.tIdleIntensity = t * 0.75;
      sceneState.sceneInOut.about.in = t;
      sceneState.sceneInOut.about1.in = t;
      sceneState.roomScale = 1 - t * 0.15;
      sceneState.roomPosition.y = isMobile ? t * 5.4 : 0;
      sceneState.roomRotation.y = -2.1;

      if (isMobile) {
        sceneState.avatarPosition.x = 0;
        sceneState.avatarPosition.y = 0;
        sceneState.avatarPosition.z = t * 6;
        sceneState.avatarRotation.y = -2.1 + Math.PI / 2 + t * (-Math.PI + 2.1 - Math.PI / 2);
      } else {
        sceneState.avatarPosition.x = t * -2;
        sceneState.avatarPosition.y = 0;
        sceneState.avatarPosition.z = t * 6;
        sceneState.avatarRotation.y = -2.3 + Math.PI / 2 + t * (-Math.PI + 2.3 - Math.PI / 2);
        sceneState.roomPosition.x = 2 + t * 2.5;
        sceneState.roomPosition.y = t * 5.7;
        sceneState.roomRotation.z = t * 0.09;
        sceneState.roomRotation.x = t * 0.1;
      }

      updateSceneWeights();
    },
  });

  const progressTrigger = ScrollTrigger.create({
    trigger: aboutEl,
    start: isMobile ? "top 75%" : "top 75%",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      sceneState.aboutProgress = self.progress;
    },
  });

  const sectionsTrigger = ScrollTrigger.create({
    trigger: aboutEl,
    start: isMobile ? "top 25%" : "top 35%",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      sceneState.sectionsProgress = self.progress;
    },
  });

  const outTrigger = ScrollTrigger.create({
    trigger: aboutEl,
    start: "bottom bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: (self) => {
      sceneState.sceneInOut.about.out = self.progress;
    },
  });

  const scenesTrigger = ScrollTrigger.create({
    trigger: aboutEl,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const t = self.progress;
      sceneState.sceneInOut.about1.out = t;
      sceneState.sceneInOut.about2.in = t;
      sceneState.avatarRotation.y = -Math.PI;
      updateSceneWeights();
    },
  });

  triggers = [inTrigger, progressTrigger, sectionsTrigger, outTrigger, scenesTrigger];
  updateSceneWeights();
}

export function cleanupAboutAnimations() {
  triggers.forEach((t) => t.kill());
  triggers = [];
}
