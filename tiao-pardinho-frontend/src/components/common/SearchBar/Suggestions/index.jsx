import { Box, List, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";
import style from "./style";

export default function Suggestions(props) {
  const { searchResults } = props;
  const styles = style();
  console.log(searchResults);

  return (
    <Box sx={styles.suggestionBox}>
      {!!searchResults.albums.length &&
        <List sx={styles.albumsList}>
          {(searchResults.albums).map((album) => {
          return(
            <>
              <ListItem key={album.id}>
                <ListItemText primary={album.name} secondary={album.year}/>
              </ListItem>
            </>
            )
          })}
        </List>
      }
    </Box>
  );
}

Suggestions.propTypes = {
  searchResults: PropTypes.object,
};
