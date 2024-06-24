import { Box } from "@mui/material";
import { colors } from "./utils/colors";
import { LinkGrid } from "./components/LinkGrid";
import { SearchBar } from "./components/SearchBar";
import { DigitalClock } from "./components/DigitalClock";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: colors.primary,
        overflowY: "auto",
      }}
    >
      <DigitalClock />
      <SearchBar />
      <LinkGrid />
    </Box>
  );
}

export default App;
