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
        <SwiperSlide>
          <img src={Slider1} alt="Slide 1" loading="lazy" />
          <ParallaxHeader scrollToCards={scrollToCards} />
        </SwiperSlide>
        <SwiperSlide>
          <ParallaxHeader scrollToCards={scrollToCards} />
          <img src={Slider2} alt="Slide 2" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider3} alt="Slide 3" loading="lazy" />
          <ParallaxHeader scrollToCards={scrollToCards} />
        </SwiperSlide>
      </Swiper>
    </AppBar>
  );
};
export default Header;
