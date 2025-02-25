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
import "../../src/App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ParallaxHeader from "../Perallax";

const Header = ({ scrollToCards }) => {
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
          <img
            src="src/assets//zdjecia/rings-removebg-preview.png"
            height={100}
          />
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
        <SwiperSlide>
          <img
            src="src/assets//zdjecia/Aleksandra_Dawid_1587.jpg"
            alt="Slide 1"
            loading="lazy"
          />
          <ParallaxHeader scrollToCards={scrollToCards} />
        </SwiperSlide>
        <SwiperSlide>
          <ParallaxHeader scrollToCards={scrollToCards} />
          <img
            src="src/assets//zdjecia/Aleksandra_Dawid_349.jpg"
            alt="Slide 2"
            loading="lazy"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="src/assets//zdjecia/Aleksandra_Dawid_768.jpg"
            alt="Slide 3"
            loading="lazy"
          />
          <ParallaxHeader scrollToCards={scrollToCards} />
        </SwiperSlide>
      </Swiper>
    </AppBar>
  );
};
export default Header;
