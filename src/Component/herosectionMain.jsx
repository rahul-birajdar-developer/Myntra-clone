import { useEffect, useState } from "react";
import style from "./Hero.module.css";

function HeroSection() {
  const images = [
    "/src/assets/hero1.webp",
    "/src/assets/hero2.webp",
    "/src/assets/hero3.webp",
    "/src/assets/hero4.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={style.image_container}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero"
            className={`${style.image} ${
              index === currentIndex ? style.active : ""
            }`}
          />
        ))}
      </div>

      <div className={style.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${style.dot} ${
              index === currentIndex ? style.activeDot : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default HeroSection;