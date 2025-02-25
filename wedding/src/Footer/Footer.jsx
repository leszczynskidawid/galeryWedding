import { Paper, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Paper elevation={3}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        minHeight={200}
        padding={10}
        textAlign={"center"}
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }} // Startuje poza ekranem (na dole)
        whileInView={{ opacity: 1, scale: 1 }} // Przesuwa się do góry
        transition={{ duration: 2, ease: "easeOut" }} // Łagodniejsze wejście
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "serif",
          }}
        >
          Pozdrawiamy !
        </Typography>
      </Box>
    </Paper>
  );
};
export default Footer;
