import { Swiper, SwiperSlide } from "swiper/react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ParallaxHeader from "../Perallax";
import Slider1 from "../../public/assets/zdjecia/slider1.webp";
import Slider2 from "../../public/assets/zdjecia/slider2.webp";
import Slider3 from "../../public/assets/zdjecia/slider3.webp";
import rings from "../../public/assets/zdjecia/rings-removebg-preview.webp";
import { useState } from "react";
import { Favorite } from "@mui/icons-material";
import { motion } from "framer-motion";

const sliderImages = [
  { image: Slider1, alt: "zdjęcie Dawida i Oli w kościele" },
  { image: Slider2, alt: "zdjęcie dawida i Oli przed salą weselną" },
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton>
          <img src={rings} height={70} alt="Rings" />
        </IconButton>
      </Toolbar>
      <SwiperSlider />
    </AppBar>
  );
};

export default Header;

const SwiperSlider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      keyboard={true}
      lazy={{
        loadPrevNext: true,
        loadPrevNextAmount: 2,
        checkInView: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      {sliderImages.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideWithPreloader slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SlideWithPreloader = ({ slide }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Obraz */}
      <img
        src={slide.image}
        alt={slide.alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Placeholder/Preloader – widoczny dopóki obraz się nie załaduje */}
      {!isLoaded && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <Box
            component={motion.div}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "linear", repeat: Infinity }}
          >
            <Favorite sx={{ fontSize: "5rem", color: "red" }} />
          </Box>
        </Box>
      )}
      {/* Dodatkowy komponent – przykładowy ParallaxHeader */}
      <ParallaxHeader />
    </Box>
  );
};
