import { Box, Link, Typography } from "@mui/material";
import { chosenColorState } from "../utils/colors";
import { useAtomValue } from "jotai";

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
    ":hover": { color: chosenColor.tertiary },
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
        <Typography sx={footerTextStyling}>
          Weather data and icons provided by{" "}
          <Link
            sx={linkStyling}
            href={
              "https://api.met.no/weatherapi/locationforecast/2.0/documentation"
            }
          >
            Yr / Meteorologisk Institutt
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
