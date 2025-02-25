import { useRef, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header/Header";
import {
  Box,
  CardContent,
  CardHeader,
  Container,
  Paper,
  Card,
  Typography,
  CardMedia,
  Grid2,
} from "@mui/material";
import { cardData } from "./constant/cardData";
import CardCompoonent from "./CardComponent";
import blogoslawienstwo from "../public/assets/zdjecia/blogoslawienstwo.png";
import przygotowania from "../public/assets/zdjecia/przygotowania.png";
import pierwszy_taniec from "../public/assets/zdjecia/pierwszy_taniec.png";
import sesja_slubna from "../public/assets/zdjecia/sesja_slubna.png";
import grupowe from "../public/assets/zdjecia/grupowe.png";
import sesja_plener from "../public/assets/zdjecia/sesja_plener.png";
import wesele from "../public/assets/zdjecia/wesele.png";

import backgraund_section from "../public/assets/zdjecia/backgraund_section.png";
import SectionCard from "./Section/Section";
import { ScrollContextProvider } from "./Context/ScrollContext";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Paper>
      <ScrollContextProvider>
        <Header />
        <SectionCard />
        <Footer />
      </ScrollContextProvider>
    </Paper>
  );
}

export default App;
