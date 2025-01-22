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
import { chosenColorState } from "../utils/state";
import { useAtomValue } from "jotai";

export const SearchBar = () => {
  const chosenColor = useAtomValue(chosenColorState);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [selectedSearchProvider, setSelectedSearchProvider] =
    useState<number>(0);

    const handleSearch = (searchPhrase: string) => {
      if (searchPhrase.trim().length === 0) {
        return;
      }
      const searchProviderBaseUrl = searchBaseUrls[selectedSearchProvider].baseUrl;
      window.open(searchProviderBaseUrl + searchPhrase, '_blank');
      setSearchPhrase("");
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
            color: chosenColor.tertiary,
          },
          "& .MuiFormLabel-root": {
            color: chosenColor.tertiary,
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: chosenColor.secondary,
          },
          "& .MuiFilledInput-underline:before": {
            borderBottomColor: chosenColor.secondary,
          },
          "& .MuiFilledInput-underline:after": {
            borderBottomColor: chosenColor.tertiary,
          },
        }}
      />
      <Select
        value={selectedSearchProvider}
        onChange={handleSelectChange}
        sx={{
          "& .MuiInputBase-input": {
            color: chosenColor.quaternary,
            backgroundColor: chosenColor.secondary,
            borderRadius: "0px 4px 4px 0px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "0px 4px 4px 0px",
            borderColor: chosenColor.secondary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px 0px 2px 0px",
            borderColor: chosenColor.tertiary,
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
