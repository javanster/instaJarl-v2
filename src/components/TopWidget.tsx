import { Box, Typography } from "@mui/material";
import { chosenColorState } from "../utils/state";
import { TimeDisplay } from "./TimeDisplay";
import { DateDisplay } from "./DateDisplay";
import { WeatherDisplay } from "./WeatherDisplay";
import { useState, useEffect } from "react";
import { Position } from "../api/weather";
import { useAtomValue } from "jotai";

export const TopWidget = () => {
  const chosenColor = useAtomValue(chosenColorState);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: { xs: position ? "column" : "row", md: "row" },
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
            visibility: { xs: position ? "hidden" : "visible", md: "visible" },
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
        {position && (
          <Typography
            sx={{ mx: 2, fontWeight: 1, color: chosenColor.secondary }}
            fontSize={{
              xs: 54,
              md: 72,
            }}
          >
            {"/"}
          </Typography>
        )}
        {position && <WeatherDisplay position={position} />}
      </Box>
    </Box>
  );
};
