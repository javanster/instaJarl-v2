interface TimeSeries {
  time: string;
  data: {
    instant: {
      details: {
        air_pressure_at_sea_level: number;
        air_temperature: number;
        cloud_area_fraction: number;
        relative_humidity: number;
        wind_from_direction: number;
        wind_speed: 2.0;
      };
    };
    next_12_hours: {
      summary: {
        symbol_code: string;
      };
      details: object;
    };
    next_1_hours: {
      summary: {
        symbol_code: string;
      };
      details: {
        precipitation_amount: number;
      };
    };
    next_6_hours: {
      summary: {
        symbol_code: string;
      };
      details: {
        precipitation_amount: number;
      };
    };
  };
}

interface WeatherResponse {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    meta: {
      updated_at: string;
      units: {
        air_pressure_at_sea_level: string;
        air_temperature: string;
        cloud_area_fraction: string;
        precipitation_amount: string;
        relative_humidity: string;
        wind_from_direction: string;
        wind_speed: string;
      };
    };
    timeseries: TimeSeries[];
  };
}

export interface Position {
  lat: number;
  lng: number;
}

export async function fetchCurrentWeather(
  params: Position | null
): Promise<WeatherResponse> {
  if (!params) {
    throw new Error("Could not get user position");
  }

  const { lat, lng } = params;

  try {
    const response = await fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/compact?altitude=0&lat=${lat}&lon=${lng}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data: WeatherResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}
