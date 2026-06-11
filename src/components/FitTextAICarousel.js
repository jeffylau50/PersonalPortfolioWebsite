import React from "react";
import "./fittextai-carousel.css";

const SCREENSHOTS = [
  {
    src: "/images/fittextai/screenshot-1-chat.webp",
    alt: "FitTextAI chat-based food logging",
  },
  {
    src: "/images/fittextai/screenshot-2-bf.webp",
    alt: "FitTextAI body fat analysis",
  },
  {
    src: "/images/fittextai/screenshot-3-progress.webp",
    alt: "FitTextAI progress selfie gallery",
  },
  {
    src: "/images/fittextai/screenshot-4-social.webp",
    alt: "FitTextAI Apple Health integration",
  },
  {
    src: "/images/fittextai/screenshot-5-cal.webp",
    alt: "FitTextAI daily calorie summary",
  },
];

function FitTextAICarousel() {
  return (
    <div className="fitTextCarouselWrap">
    <div
      id="fitTextAICarousel"
      className="carousel slide fitTextCarousel"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {SCREENSHOTS.map((_, index) => (
          <li
            key={index}
            data-target="#fitTextAICarousel"
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {SCREENSHOTS.map((screenshot, index) => (
          <div
            key={screenshot.src}
            className={`carousel-item${index === 0 ? " active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={screenshot.src}
              alt={screenshot.alt}
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#fitTextAICarousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#fitTextAICarousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
}

export default FitTextAICarousel;
