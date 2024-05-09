import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from "prop-types";
import style from "./style";
import { Fragment } from "react";
import { Link } from "react-router-dom";

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
              <Fragment key={album.id}>
                <ListItem sx={styles.listItem} component={Link} to={`albums/${album.id}`}>
                  <ListItemText primary={album.name} secondary={album.year}/>
                </ListItem>
              </Fragment>
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
              <Fragment key={track.id}>
                <ListItem sx={styles.listItem} component={Link} to={`tracks/${track.id}`}>
                  <ListItemText primary={track.name} secondary={track.album.name}/>
                </ListItem>
              </Fragment>
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
