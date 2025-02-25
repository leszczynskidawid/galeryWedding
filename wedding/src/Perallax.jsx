import { Box, Typography, Button } from "@mui/material";
import ButtonMore from "./ButtonMore";
import { useRef } from "react";
const ParallaxHeader = ({ scrollToCards }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        top: "50%",
        left: "50%",
        margin: "auto",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        display: "flex",
        padding: "50px",
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",

        gap: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "rgba(255, 0, 0, 0.98)",
            overflow: "hidden",
            fontWeight: 600,
            fontFamily: "'Petit Formal Script', cursive",
            fontSize: "clamp(2.5rem, 3vw, 3rem)",
          }}
        >
          Dziękujemy, że byliście z nami w tym wyjątkowym dniu! 💕
        </Typography>
        <Typography
          sx={{
            color: "red",
            fontWeight: 400,
            fontSize: "25px",
            // textShadow: "-2px -2px 0 white",
            fontFamily: "cursive",
          }}
        >
          Aleskandra & Dawid
        </Typography>
      </Box>

      <ButtonMore onCLick={scrollToCards} />
    </Box>
  );
};
export default ParallaxHeader;
