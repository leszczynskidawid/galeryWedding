import { Box, Grid2 } from "@mui/material";
import CardCompoonent from "../CardComponent";
import { cardData } from "../constant/cardData";
import backgraund_section from "../../public/assets/zdjecia/backgraund_section.png";
import { useScrollContext } from "../Context/ScrollContext";

const SectionCard = () => {
  const { cardSectionRef } = useScrollContext();
  return (
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
          backgroundImage: `url(${backgraund_section})`,
        },
      }}
    >
      <Grid2 container mx={2} spacing={2} justifyContent={"center"}>
        {cardData.map((card, index) => (
          <Grid2 item key={index}>
            <CardCompoonent
              path={card.path}
              title={card.title}
              image={card.image}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
export default SectionCard;
