import { createContext, useContext, useRef } from "react";

const ContextScroll = createContext();

const ScrollContextProvider = ({ children }) => {
  const cardSectionRef = useRef(null);

  const scrollToCards = () => {
    cardSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ContextScroll.Provider value={{ scrollToCards, cardSectionRef }}>
      {children}
    </ContextScroll.Provider>
  );
};
const useScrollContext = () => useContext(ContextScroll);
export { ScrollContextProvider, useScrollContext };
