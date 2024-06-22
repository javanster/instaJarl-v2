import { Box } from "@mui/material";
import { colors } from "./utils/colors";
import { LinkGrid } from "./components/LinkGrid";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: colors.primary,
      }}
    >
      <LinkGrid />
    </Box>
  );
}

export default App;
