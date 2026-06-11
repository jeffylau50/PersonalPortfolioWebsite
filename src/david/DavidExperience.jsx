import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DavidPreloader from "./DavidPreloader";
import DavidCanvas from "./DavidCanvas";
import AboutOverlay from "./AboutOverlay";
import { useDavidAssets } from "./useDavidAssets";
import { setupAboutAnimations, cleanupAboutAnimations } from "./aboutAnimations";
import "./david-experience.css";

function DavidExperience({ heroContent }) {
  const { progress, items, ready, error } = useDavidAssets();
  const [preloaderVisible, setPreloaderVisible] = useState(true);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (!ready && !error) return undefined;
    const timer = setTimeout(() => setPreloaderVisible(false), error ? 0 : 200);
    return () => clearTimeout(timer);
  }, [ready, error]);

  useEffect(() => {
    if (!ready || !aboutRef.current) return undefined;
    setupAboutAnimations(aboutRef.current);
    ScrollTrigger.refresh();

    return () => {
      cleanupAboutAnimations();
    };
  }, [ready]);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    return () => window.removeEventListener("resize", refresh);
  }, []);

  return (
    <>
      <DavidPreloader
        progress={error ? 1 : progress}
        visible={preloaderVisible}
        error={error}
      />

      <div className="david-experience">
        <div className="david-fixed-stage">
          <div className="david-canvas-wrap">
            {ready && <DavidCanvas items={items} />}
          </div>

          <div className="david-hero-overlay">{heroContent}</div>
          {ready && <AboutOverlay />}
        </div>

        <div ref={aboutRef} className="david-about-spacer" aria-hidden="true" />
      </div>
    </>
  );
}

export default DavidExperience;
