import { Swiper, SwiperSlide } from "swiper/react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  StepIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
// import "../../src/App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ParallaxHeader from "../Perallax";
import Slider1 from "../../public/assets/zdjecia/slider1.jpg";
import Slider2 from "../../public/assets/zdjecia/slider2.jpg";
import Slider3 from "../../public/assets/zdjecia/slider3.jpg";
import rings from "../../public/assets/zdjecia/rings-removebg-preview.png";

const sliderImages = [
  { image: Slider1, alt: "zdjęcie Dawida i Oli w kościele " },
  { image: Slider2, alt: "zdjęcie dawida i Oli przed salą weselną " },
  { image: Slider3, alt: "zdjęcia Dawida i Oli przytulonych do siebie" },
];

const Header = () => {
  return (
    <AppBar
      sx={{
        height: "100vh",
        position: "relative",
        background: "transparent",
      }}
    >
      <Toolbar
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          justifyContent: "space-between",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton>
          <img src={rings} height={70} />
        </IconButton>
      </Toolbar>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        keyboard={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.image}>
            <img src={slide.image} alt={slide.alt} loading="lazy" />
            <ParallaxHeader />
          </SwiperSlide>
        ))}
      </Swiper>
    </AppBar>
  );
};
export default Header;
