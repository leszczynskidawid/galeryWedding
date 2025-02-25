import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ButtonMore = ({ onCLick }) => {
  return (
    <IconButton
      onClick={onCLick}
      sx={{
        backgroundColor: "transparent",
        animation: "pulse 1.5s infinite ease-in-out",
        "@keyframes pulse": {
          "0%": { boxShadow: "0 0 10px rgba(255, 255, 255, 0.9)" },
          "50%": { boxShadow: "0 0 60px rgba(255, 255, 255, 1)" },
          "100%": { boxShadow: "0 0 10px rgba(231, 32, 32, 0.1)" },
        },

        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Delikatny efekt hover
          animation: "none", // Zatrzymanie pulsowania po najechaniu
        },
      }}
    >
      <ExpandMoreIcon
        sx={{
          fontSize: "50px",
          borderRadius: "50%",
        }}
      />
    </IconButton>
  );
};
export default ButtonMore;
