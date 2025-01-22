import { Box, Link, Typography } from "@mui/material";
import { LinkObj } from "../utils/links";
import { useAtomValue } from "jotai";
import { chosenColorState } from "../utils/state";

export const LinkCard = ({ title, link, icon: Icon }: LinkObj) => {
  const chosenColor = useAtomValue(chosenColorState);

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
        target="_blank"
        href={link}
        sx={{
          height: "72px",
          width: "72px",
          borderRadius: "15%",
          backgroundColor: chosenColor.quaternary,
          ":hover": {
            backgroundColor: chosenColor.tertiary,
            color: chosenColor.secondary,
          },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "48px",
          color: chosenColor.secondary,
        }}
      >
        <Icon fontSize="inherit" />
      </Box>
      <Typography sx={{ mt: 1, color: chosenColor.secondary }}>
        {title}
      </Typography>
    </Box>
  );
};
