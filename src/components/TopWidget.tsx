import { Box, Typography } from "@mui/material";
import {
  agreedToWeatherFunctionalityState,
  chosenColorState,
} from "../utils/state";
import { TimeDisplay } from "./TimeDisplay";
import { DateDisplay } from "./DateDisplay";
import { WeatherDisplay } from "./WeatherDisplay";
import { useState, useEffect } from "react";
import { Position } from "../api/weather";
import { useAtomValue } from "jotai";

export const TopWidget = () => {
  const chosenColor = useAtomValue(chosenColorState);
  const [position, setPosition] = useState<Position | null>(null);
  const agreedToWeatherFunctionality = useAtomValue(
    agreedToWeatherFunctionalityState
  );

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
        flexDirection: {
          xs: position && agreedToWeatherFunctionality ? "column" : "row",
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
              xs:
                position && agreedToWeatherFunctionality ? "hidden" : "visible",
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
        {position && agreedToWeatherFunctionality && (
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
        {position && agreedToWeatherFunctionality && (
          <WeatherDisplay position={position} />
        )}
      </Box>
    </Box>
  );
};
