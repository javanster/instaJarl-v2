import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { colors } from "../utils/colors";

export const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);

      const date = new Date().toLocaleDateString();
      setCurrentDate(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: {
          xs: 6,
          md: 12,
        },
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", color: colors.tertiary }}
        fontSize={{
          xs: 36,
          md: 48,
        }}
      >
        {currentTime}
      </Typography>
      <Typography
        sx={{ mx: 2, fontWeight: 1, color: colors.secondary }}
        fontSize={{
          xs: 54,
          md: 72,
        }}
      >
        {"/"}
      </Typography>
      <Typography
        sx={{ fontWeight: 1, color: colors.tertiary }}
        fontSize={{
          xs: 30,
          md: 42,
        }}
      >
        {currentDate}
      </Typography>
    </Box>
  );
};
