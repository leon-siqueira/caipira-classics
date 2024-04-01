import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import style from './style';
import placeholder from '../../../assets/img-placeholder.jpg';
import albumDuration from '../../../helpers/duration/album';
import tracksCount from '../../../helpers/label/tracksCount';


export default function AlbumCard(props) {
  const { album } = props;
  const styles = style();

  return (
    <Grid item sx={{width: 250}} mb={2} mx={1}>
      <CardActionArea component="a" href={`/albums/${album.id}`}>
        <Card sx={styles.card}>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            // TODO: add img_url field on API and use it here as img_url || placeholder
            image={placeholder}
            alt={`Album cover - ${album.name}`}
          />
          <CardContent sx={styles.cardContent}>
            <Typography component="h4" variant="subtitle2" sx={styles.albumName}>
              {album.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {album.year} • {tracksCount(album.tracks)}<br/>
              {albumDuration(album.tracks)}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
