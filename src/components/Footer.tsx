import { Box, Link, Typography } from "@mui/material";
import { colors } from "../utils/colors";

const footerTextStyling = {
  textAlign: "center",
  color: colors.secondary,
  fontSize: "10px",
};

const linkStyling = {
  color: colors.secondary,
  textDecoration: "none",
  ":hover": { color: colors.tertiary },
};

export const Footer = () => {
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
          <Link sx={linkStyling} href={"https://developer.yr.no"}>
            Yr / Meteorologisk Institutt
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
