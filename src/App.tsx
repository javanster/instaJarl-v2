import { Box } from "@mui/material";
import { colors } from "./utils/colors";
import { LinkGrid } from "./components/LinkGrid";
import { SearchBar } from "./components/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopWidget } from "./components/TopWidget";
import { Footer } from "./components/Footer";

function App() {
  const queryClient = new QueryClient();

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        backgroundColor: colors.primary,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <TopWidget />
        <SearchBar />
        <LinkGrid />
      </QueryClientProvider>
      <Footer />
    </Box>
  );
}

export default App;
