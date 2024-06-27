import { Box, Grid } from "@mui/material";
import { LinkObj, links } from "../utils/links";
import { LinkCard } from "./LinkCard";

export const LinkGrid = () => {
  const currentHour = new Date().getHours();

  const showLink = (linkObj: LinkObj) =>
    linkObj.activeDuringWorkHours || currentHour < 8 || currentHour > 15;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        mt: 12,
        mb: 28,
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
        {links.map(
          (l) =>
            showLink(l) && (
              <Grid key={l.title} item xs={3} sm={2} lg={1}>
                <LinkCard
                  title={l.title}
                  link={l.link}
                  icon={l.icon}
                  activeDuringWorkHours={l.activeDuringWorkHours}
                />
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};
