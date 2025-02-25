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
import CardCompoonent from "./CardComponent";
import blogoslawienstwo from "../public/assets/zdjecia/blogoslawienstwo.png";
import przygotowania from "../public/assets/zdjecia/przygotowania.png";
import pierwszy_taniec from "../public/assets/zdjecia/pierwszy_taniec.png";
import sesja_slubna from "../public/assets/zdjecia/sesja_slubna.png";
import grupowe from "../public/assets/zdjecia/grupowe.png";
import sesja_plener from "../public/assets/zdjecia/sesja_plener.png";
import wesele from "../public/assets/zdjecia/wesele.png";
import slub from "../public/assets/zdjecia/blogoslawienstwo.png";

function App() {
  const cardSectionRef = useRef(null);

  const scrollToCards = () => {
    cardSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Paper sx={{}}>
      <Header scrollToCards={scrollToCards} />
      <Box
        ref={cardSectionRef}
        sx={{
          display: "flex",

          padding: "25px",
          position: "relative",
          left: 0,
          backgroundColor: "rgba(39, 30, 35, 0.8)",

          "&::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.2,
            zIndex: 0,
            backgroundSize: "cover",
            objectFit: "contain",
            backgroundPosition: "center",

            backgroundRepeat: "no-repeat",
            backgroundImage: `url('zdjecia/pobrane.png')`,
          },
        }}
      >
        <Grid2 container mx={2} spacing={2} justifyContent={"center"}>
          <Grid2 item>
            <CardCompoonent
              image={przygotowania}
              title={"Przygotowania"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EvBrvIBfSuBMkA9CG8a1_QAB8r8R9ZwUMBhAL8znhEA3bw?e=DQsR6x"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={blogoslawienstwo}
              title={"Błogosławieństwo"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EmuQzkBVDUFGqvMWKuhbO18Bg01_42bI6fwULbDCXekL_w?e=Yk4yRA"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={pierwszy_taniec}
              title={"Pierszy taniec"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EuhtgCy2T5tBh-zdxqcYh4gBfBRolVN5LjVKHSkTeLXu6A?e=ry5WbJ"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={sesja_slubna}
              title={"Sesja Ślubna"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/Eut6zChWNJpOkF0ci1HSaJ0B0fIsu7-Zj2eB04zmOxjsOQ?e=LSZj1c"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={grupowe}
              title={"Grupowe"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EsDGL1zd8bFFgYzCBT1YY4UBBRrXeNqnd3PwnUlajDETLA?e=1H7zPi"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={sesja_plener}
              title={"Sesja plener"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EoywO-c5JXVHkAV3-rtWCa4BD3ecP1YcDUp06YYvyDPtEw?e=W5V4YV"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={wesele}
              title={"Wesele"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EhPuOC8D8glJj67hW_91QJsB-McQI3hzvdtiCOm4vB8_Ig?e=UfFT10"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={slub}
              title={"Slub"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/Es-iC4Kjp0RKj1JoaD2fwg4BwqhdWEpcsN9cDLmXkYm8wg?e=76R6va"
              }
            />
          </Grid2>
        </Grid2>
      </Box>
      <Box></Box>
    </Paper>
  );
}

export default App;
