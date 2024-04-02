import { TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import style from "./style";

export default function SearchBar() {
  const styles = style();

  return (
    <TextField
      id="search"
      label="Search"
      variant="standard"
      sx={styles.searchBar}
      InputProps={{
          endAdornment: <SearchIcon sx={styles.searchIcon}/>,
        }} />
  )
}
