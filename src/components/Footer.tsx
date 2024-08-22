import { Box, Link, Typography } from "@mui/material";
import { useAtomValue } from "jotai";
import { chosenColorState } from "../utils/state";

export const Footer = () => {
  const chosenColor = useAtomValue(chosenColorState);

  const footerTextStyling = {
    textAlign: "center",
    color: chosenColor.secondary,
    fontSize: "10px",
  };

  const linkStyling = {
    color: chosenColor.secondary,
    textDecoration: "none",
    fontSize: "10px",
    textAlign: "center",
    cursor: "pointer",
    ":hover": { color: chosenColor.tertiary, textDecoration: "underline" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pb: 4,
      }}
    >
      <Box>
        <Typography sx={footerTextStyling}>
          Made by{" "}
          <Link sx={linkStyling} href={"https://github.com/javanster"}>
            Jarl Sterkenburg
          </Link>
        </Typography>
        <Typography sx={footerTextStyling}>
          Components and icons provided by{" "}
          <Link sx={linkStyling} href={"https://mui.com/material-ui/"}>
            Material UI
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
