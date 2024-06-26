import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { colors } from "../utils/colors";

export const DateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().toLocaleDateString();
      setCurrentDate(date);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography
      sx={{
        fontWeight: 1,
        color: colors.tertiary,
        fontSize: {
          xs: 30,
          md: 42,
        },
      }}
    >
      {currentDate}
    </Typography>
  );
};
