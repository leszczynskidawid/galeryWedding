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
            type: "tween",
            ease: "easeInOut",
            duration: 0.8,
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
            transition: "transform 0.4s ease",
            "&:hover": {
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.9)",
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
              component="div"
              variant="h3"
              sx={{
                color: "#ffe0e0",
                fontSize: { xs: "8vw", sm: "6vw", md: "5vw", lg: "2.8vw" },
                textAlign: "center",
                fontFamily: "serif",
                fontStyle: "italic",
                letterSpacing: "0.2rem",
                maxWidth: "80%", // Zapobiega wychodzeniu tekstu poza kartę
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
