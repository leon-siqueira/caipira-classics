import { Box, TextField, debounce } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import style from "./style";
import { useEffect, useState } from "react";
import axios from "axios";
import Suggestions from "./Suggestions";

export default function SearchBar() {
  const styles = style();
  const [searchResults, setSearchResults] = useState({ albums: [], tracks: []});
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const search = async () => {
      const params = {
        name: searchTerm
      }
      const {data} = await axios.get(`${import.meta.env.VITE_APP_API_URL}/search`, { params });
      setSearchResults(data);
    }
    const debouncedSearch = debounce(() => { search(searchTerm) })
    debouncedSearch();
  }, [searchTerm])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearchBlur = () => {
    setTimeout(() => {
      setIsSearching(false)
    }, 150);
  }

  return (
    <>
      <Box>
        <TextField
          id="search"
          label="Search"
          variant="standard"
          autoComplete="off"
          sx={styles.searchBar}
          value={searchTerm}
          onChange={(e) => handleSearchChange(e)}
          onFocus={() => setIsSearching(true)}
          onBlur={() => handleSearchBlur()}
          InputProps={{
              endAdornment: <SearchIcon sx={styles.searchIcon}/>,
            }} />
          {
            isSearching && <Suggestions searchResults={searchResults} />
          }
        </Box>
    </>
  )
}
