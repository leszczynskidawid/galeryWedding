import "./App.css";
import Header from "./Header/Header";
import { Paper } from "@mui/material";
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
