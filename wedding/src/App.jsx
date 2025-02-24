import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
              image={"../zdjecia/przygotowania.png"}
              title={"Przygotowania"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EvBrvIBfSuBMkA9CG8a1_QAB8r8R9ZwUMBhAL8znhEA3bw?e=DQsR6x"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/blogoslawienstwo.png"}
              title={"Błogosławieństwo"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EmuQzkBVDUFGqvMWKuhbO18Bg01_42bI6fwULbDCXekL_w?e=Yk4yRA"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/pierwszy_taniec.png"}
              title={"Pierszy taniec"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EuhtgCy2T5tBh-zdxqcYh4gBfBRolVN5LjVKHSkTeLXu6A?e=ry5WbJ"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/sesja_slubna.png"}
              title={"Sesja ślubna"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/Eut6zChWNJpOkF0ci1HSaJ0B0fIsu7-Zj2eB04zmOxjsOQ?e=LSZj1c"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/grupowe.png"}
              title={"Grupowe"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EsDGL1zd8bFFgYzCBT1YY4UBBRrXeNqnd3PwnUlajDETLA?e=1H7zPi"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/sesja_plener.png"}
              title={"Sesja plener"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EoywO-c5JXVHkAV3-rtWCa4BD3ecP1YcDUp06YYvyDPtEw?e=W5V4YV"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/wesele.png"}
              title={"Wesele"}
              path={
                "https://1drv.ms/a/c/f15f8e8fcb6b79c1/EhPuOC8D8glJj67hW_91QJsB-McQI3hzvdtiCOm4vB8_Ig?e=UfFT10"
              }
            />
          </Grid2>
          <Grid2 item>
            <CardCompoonent
              image={"../zdjecia/Aleksandra_Dawid_349.jpg"}
              title={"Ślub"}
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
