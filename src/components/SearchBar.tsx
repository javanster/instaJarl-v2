import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { searchBaseUrls } from "../utils/searchUrls";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "../utils/colors";

export const SearchBar = () => {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [selectedSearchProvider, setSelectedSearchProvider] =
    useState<number>(0);

  const handleSearch = (searchPhrase: string) => {
    if (searchPhrase.length === 0) {
      return;
    }
    const searchProviderBaseUrl =
      searchBaseUrls[selectedSearchProvider].baseUrl;
    window.location.href = searchProviderBaseUrl + searchPhrase;
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(searchPhrase);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
  };

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    setSelectedSearchProvider(Number(event.target.value));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
      <TextField
        autoFocus
        label="Search"
        variant="filled"
        value={searchPhrase}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        InputProps={{
          endAdornment: <SearchIcon sx={{ color: "white" }} />,
        }}
        sx={{
          width: {
            sm: "250px",
            md: "400px",
            lg: "500px",
          },
          "& .MuiInputBase-input": {
            color: colors.tertiary,
          },
          "& .MuiFormLabel-root": {
            color: colors.tertiary,
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: colors.secondary,
          },
          "& .MuiFilledInput-underline:before": {
            borderBottomColor: colors.secondary,
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: colors.tertiary,
          },
        }}
      />
      <Select
        value={selectedSearchProvider}
        onChange={handleSelectChange}
        sx={{
          "& .MuiInputBase-input": {
            color: colors.tertiary,
            backgroundColor: colors.secondary,
            borderRadius: "0px 4px 4px 0px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "0px 4px 4px 0px",
            borderColor: colors.secondary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px 0px 2px 0px",
            borderColor: colors.tertiary,
          },
        }}
      >
        {searchBaseUrls.map((url, index) => (
          <MenuItem key={index} value={index}>
            {url.title}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
