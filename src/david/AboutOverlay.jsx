import { useEffect, useState } from "react";
import gsap from "gsap";
import { sceneState } from "./sceneState";

const SERVICES = [
  "React & React Native",
  "TypeScript & Node.js",
  "Python & Express",
  "AWS & Firebase",
  "Project Management (PMP)",
];

function AboutOverlay() {
  const [aboutProgress, setAboutProgress] = useState(0);
  const [sectionsProgress, setSectionsProgress] = useState(0);

  useEffect(() => {
    const tick = () => {
      setAboutProgress(sceneState.aboutProgress);
      setSectionsProgress(sceneState.sectionsProgress || 0);
    };
    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  const progressPercent = Math.round(aboutProgress * 100);
  const descriptionOpacity = sectionsProgress < 0.55 ? Math.min(1, sectionsProgress * 3) : Math.max(0, 1 - (sectionsProgress - 0.55) * 4);
  const servicesOpacity = sectionsProgress < 0.45 ? 0 : Math.min(1, (sectionsProgress - 0.45) * 3);
  const progressOpacity = sectionsProgress < 0.1 ? 0 : Math.min(1, (sectionsProgress - 0.1) * 4);

  return (
    <div className="david-about-overlay">
      <div
        className="david-about-box david-about-box--description"
        style={{ opacity: descriptionOpacity }}
      >
        <div className="david-about-box-line" />
        <div className="david-about-box-meta">
          <span className="david-about-box-name">Jeffy Lau</span>
          <span className="david-about-box-location">Software Engineer</span>
        </div>
        <div className="david-about-box-content">
          <p>
            Full-stack engineer and PMP-certified project manager building mobile apps, web
            platforms, and cross-functional delivery.
          </p>
        </div>
      </div>

      <div
        className="david-about-box david-about-box--services"
        style={{ opacity: servicesOpacity }}
      >
        <div className="david-about-box-content">
          <h3>Skills</h3>
          <ul>
            {SERVICES.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="skills-scroll"
        className="david-progress-count"
        style={{ opacity: progressOpacity }}
      >
        <div className="david-progress-count-bar">
          <div
            className="david-progress-count-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="david-progress-count-percent">{progressPercent}%</span>
      </div>
    </div>
  );
}

export default AboutOverlay;
