import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { chosenColorState } from "../utils/colors";
import { useAtomValue } from "jotai";

export const TimeDisplay = () => {
  const chosenColor = useAtomValue(chosenColorState);
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
        color: chosenColor.tertiary,
        fontSize: 48,
      }}
    >
      {currentTime}
    </Typography>
  );
};
