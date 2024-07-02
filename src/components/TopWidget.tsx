import { Box, Typography } from "@mui/material";
import { chosenColorState } from "../utils/state";
import { TimeDisplay } from "./TimeDisplay";
import { DateDisplay } from "./DateDisplay";
import { useAtomValue } from "jotai";

export const TopWidget = () => {
  const chosenColor = useAtomValue(chosenColorState);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "row",
          md: "row",
        },
        mt: {
          xs: 6,
          md: 12,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TimeDisplay />
        <Typography
          sx={{
            mx: 2,
            fontWeight: 1,
            color: chosenColor.secondary,
            visibility: {
              xs: "visible",
              md: "visible",
            },
            fontSize: {
              xs: 54,
              md: 72,
            },
          }}
        >
          {"/"}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DateDisplay />
      </Box>
    </Box>
  );
};
