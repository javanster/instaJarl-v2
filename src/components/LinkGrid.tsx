import { Box, Grid } from "@mui/material";
import { links } from "../utils/links";
import { LinkCard } from "./LinkCard";

export const LinkGrid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        columns={6}
        rowSpacing={8}
        columnSpacing={1}
        justifyContent="center"
        sx={{ width: "80%" }}
      >
        {links.map((l) => (
          <Grid item xs={3} sm={2} lg={1}>
            <LinkCard
              title={l.title}
              link={l.link}
              icon={l.icon}
              activeDuringWorkHours={l.activeDuringWorkHours}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
