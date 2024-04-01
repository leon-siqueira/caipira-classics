import { Box, Container, Typography, Grid, Table, TableRow, TableCell, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import placeholder from '../../assets/img-placeholder.jpg';
import './style.css';
import tracksCount from "../../helpers/label/tracksCount";
import albumDuration from "../../helpers/duration/album";
import style from "./style";

export default function Album() {
  const { id } = useParams();
  const [album, setAlbum] = useState();

  const getAlbum = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/albums/${id}`);
    setAlbum(data);
  };

  useEffect(() => {
    getAlbum();
    return () => {
      console.log('cleaning');
    }
  }, [id])

  if (!album) {

    return (
      <Container>
        <h1>Loading...</h1>
      </Container>)
  }

  const styles = style();

  return (
    <>
      <Container sx={{marginTop: 5}} >
        <Grid container sx={styles.albumInfo} spacing={3}>
          <Grid item>
            <img className='album-cover' src={album.img_url || placeholder} alt={`Album cover - ${album.name}`} />
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{fontWeight:'bold'}}>{album.name}</Typography>
            <Typography variant="subtitle1">Tião Carreiro & Pardinho • {album.year}</Typography>
            <Typography variant="subtitle1">{tracksCount(album.tracks)} • {albumDuration(album.tracks)}</Typography>
            <Button>
              Add Track
            </Button>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h4">Tracks</Typography>
          <Table>
            {album.tracks.map((track, i) => (
              <TableRow key={track.id}>
                <TableCell sx={styles.trackNumber} >{i + 1}</TableCell>
                <TableCell sx={{fontWeight: 'bold'}} >{track.name}</TableCell>
                <TableCell align="right">{trackDuration(track.duration)}</TableCell>
              </TableRow>
            ))}
          </Table>
        </Box>
      </Container>
    </>

  );
}

function trackDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = (duration % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
