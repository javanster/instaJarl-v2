import { Box } from "@mui/material";
import { colorPalettes } from "./utils/colors";
import { LinkGrid } from "./components/LinkGrid";
import { SearchBar } from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopWidget } from "./components/TopWidget";
import { Footer } from "./components/Footer";
import { useAtom, useSetAtom } from "jotai";
import { useEffect } from "react";
import { DataUsageDialog } from "./components/DataUsageDialog";
import {
  agreedToWeatherFunctionalityState,
  chosenColorState,
} from "./utils/state";

function App() {
  const queryClient = new QueryClient();
  const [chosenColor, setChosenColor] = useAtom(chosenColorState);
  const setAgreedToWeatherFunctionality = useSetAtom(
    agreedToWeatherFunctionalityState
  );
  const agreedToWeatherFunctionality = localStorage.getItem(
    "instaJarlAgreedToWeatherService"
  );

  useEffect(() => {
    agreedToWeatherFunctionality &&
      setAgreedToWeatherFunctionality(
        agreedToWeatherFunctionality === "true" ? true : false
      );
  }, [agreedToWeatherFunctionality, setAgreedToWeatherFunctionality]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * colorPalettes.length);
    setChosenColor(colorPalettes[randomIndex]);
  }, [setChosenColor]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        backgroundColor: chosenColor.primary,
      }}
    >
      <QueryClientProvider client={queryClient}>
        {agreedToWeatherFunctionality === null && <DataUsageDialog />}
        <TopWidget />
        <SearchBar />
        <LinkGrid />
      </QueryClientProvider>
      <Footer />
    </Box>
  );
}

export default App;
