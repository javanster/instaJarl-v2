import { Box } from "@mui/material";
import { colors } from "./utils/colors";
import { LinkGrid } from "./components/LinkGrid";
import { SearchBar } from "./components/SearchBar";

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
      <SearchBar />
      <LinkGrid />
    </Box>
  );
}

export default App;
