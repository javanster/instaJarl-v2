import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Position, fetchCurrentWeather } from "../api/weather";
import { colors } from "../utils/colors";

interface Props {
  position: Position;
}

export const WeatherDisplay = ({ position }: Props) => {
  const query = useQuery({
    queryKey: ["currentWeather"],
    queryFn: () => fetchCurrentWeather(position),
  });

  const currentTemp =
    query.data?.properties.timeseries[0].data.instant.details.air_temperature;
  const weatherSymbolCode =
    query.data?.properties.timeseries[0].data.next_1_hours.summary.symbol_code;

  return (
    <Box>
      {!position ? null : position && query.data ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width={50} src={`public/weatherSvg/${weatherSymbolCode}.svg`} />
          <Typography
            sx={{ fontWeight: 1, color: colors.tertiary, ml: 1 }}
            fontSize={{
              xs: 20,
              md: 28,
            }}
          >
            {currentTemp} °C
          </Typography>
        </Box>
      ) : (
        <CircularProgress
          sx={{
            "& .MuiCircularProgress-circle": {
              color: colors.tertiary,
            },
          }}
        />
      )}
    </Box>
  );
};
