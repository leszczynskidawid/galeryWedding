import { Box, Card, Typography, Paper, CardContent, Link } from "@mui/material";
import { motion } from "framer-motion";

const CardCompoonent = ({ path, image, title }) => {
  return (
    <Box>
      <a href={path} style={{ textDecoration: "none" }}>
        <Card
          component={motion.div}
          initial={{ scale: 0, y: 100 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.4,
            delay: 0.2,
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",

            width: {
              xs: "90vw", // Na bardzo małych ekranach (mobilnych) karta zajmuje 90% szerokości
              sm: "70vw", // Tablet
              md: "50vw", // Małe laptopy
              lg: "30vw", // Duże ekrany
              xl: "25vw", // Jeszcze większe ekrany
            },
            height: {
              xs: "30vw", // proporcjonalna wysokość
              md: "20vw",
            },
            minWidth: 280, // minimalna szerokość
            minHeight: 300, // minimalna wysokość

            borderRadius: "20px",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              boxShadow: 9,
            },
            // Overlay dla lepszej czytelności treści
            "&::before": {
              content: '""',
              position: "absolute",

              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0,0,0,0.2))",
            },
          }}
        >
          <CardContent
            sx={{
              zIndex: 1,
            }}
          >
            <Typography
              color="white"
              component="div"
              variant="h3"
              sx={{
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                // fontWeight: "bold",
                fontFamily: "serif",
                fontStyle: "italic",
              }}
            >
              {title}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Box>
  );
};
export default CardCompoonent;
