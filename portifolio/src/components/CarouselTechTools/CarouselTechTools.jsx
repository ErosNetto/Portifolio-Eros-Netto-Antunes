import "./CarouselTechTools.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";

import { carouselTechAndToolLogos } from "../../constants/techAndToolLogos";

const CarouselTechTools = () => {
  return (
    <div className="carouse-tech-tools">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        className="swiper"
      >
        {carouselTechAndToolLogos.map((tech) => (
          <SwiperSlide key={tech.title}>
            <div className="tech-item">
              <img src={tech.image} alt={tech.title} className="tech-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTechTools;
