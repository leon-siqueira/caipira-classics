import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";
import style from "./style";

export default function Suggestions(props) {
  const { searchResults } = props;
  const styles = style();

  return (
    <Box sx={styles.suggestionBox}>
      {!!searchResults.albums.length &&
        <>
          <Box sx={styles.listTitle}>
            <Typography variant="overline">Albums</Typography>
          </Box>
          <List sx={styles.suggestionList}>
            {(searchResults.albums).map((album) => {
            return(
              <>
                <ListItem key={album.id} sx={styles.listItem}>
                  <ListItemText primary={album.name} secondary={album.year}/>
                </ListItem>
              </>
              )
            })}
          </List>
        </>
      }
      {!!searchResults.tracks.length &&
        <>
          <Box sx={styles.listTitle}>
            <Typography variant="overline">Tracks</Typography>
          </Box>
          <List sx={styles.suggestionList}>
            {(searchResults.tracks).map((track) => {
            return(
              <>
                <ListItem key={track.id} sx={styles.listItem}>
                  <ListItemText primary={track.name} secondary={track.album.name}/>
                </ListItem>
              </>
              )
            })}
          </List>
        </>
      }
    </Box>
  );
}

Suggestions.propTypes = {
  searchResults: PropTypes.object,
};
