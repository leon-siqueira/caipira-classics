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

  return (
    <>
      <Box>
        <TextField
          id="search"
          label="Search"
          variant="standard"
          sx={styles.searchBar}
          value={searchTerm}
          onChange={async(e) => await handleSearchChange(e)}
          InputProps={{
              endAdornment: <SearchIcon sx={styles.searchIcon}/>,
            }} />
          {/* TODO: Criar componente das sugestões */}

          <Suggestions searchResults={searchResults}/>
        </Box>
    </>
  )
}
