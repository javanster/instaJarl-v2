import { Box, Link, Typography } from "@mui/material";
import { LinkObj } from "../utils/links";
import { colors } from "../utils/colors";

export const LinkCard = ({ title, link, icon: Icon }: LinkObj) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <Box
        component={Link}
        href={link}
        sx={{
          height: "72px",
          width: "72px",
          borderRadius: "15%",
          backgroundColor: colors.secondary,
          ":hover": {
            backgroundColor: colors.tertiary,
            color: colors.secondary,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          color: colors.tertiary,
        }}
      >
        <Icon fontSize="inherit" />
      </Box>
      <Typography sx={{ mt: 1, color: colors.tertiary }}>{title}</Typography>
    </Box>
  );
};
