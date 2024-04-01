import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import style from './style';
import placeholder from '../../../assets/img-placeholder.jpg';

export default function AlbumCard(props) {
  const { album } = props;
  const styles = style();

  return (
    <Grid item sx={{width: 250}}>
      <CardActionArea component="a" href={`/albums/${album.id}`}>
        <Card sx={styles.card}>
          <CardMedia
            component="img"
            sx={{ width: 250 }}
            image={placeholder}
            alt='Album cover image'
          />
          <CardContent sx={{ flex: 1 }}>
            {/* TODO: put those sx on style() */}
            <Typography component="h4" variant="subtitle2" sx={{height: '3em', fontWeight: 'bold'}}>
              {album.name}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {album.year} • {duration(album.tracks)}
            </Typography>

          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

function duration(tracks) {
  const seconds = tracks.reduce((acc, track) => acc + track.duration, 0);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const hoursStr = hours ? `${hours} hour${hours > 1 ? 's' : ''}` : '';
  const minutesStr = `${minutes} minute${minutes > 1 ? 's' : ''}`;
  return [hoursStr, minutesStr].filter(Boolean).join(' ') || '0 minutes';
}

AlbumCard.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.object),
    // image: PropTypes.string.isRequired,
    // imageLabel: PropTypes.string.isRequired,
    // title: PropTypes.string.isRequired,
  }).isRequired,
};
