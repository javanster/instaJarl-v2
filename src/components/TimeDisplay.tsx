import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { colors } from "../utils/colors";

export const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography
      sx={{
        fontWeight: "bold",
        color: colors.tertiary,
        fontSize: 48,
      }}
    >
      {currentTime}
    </Typography>
  );
};
