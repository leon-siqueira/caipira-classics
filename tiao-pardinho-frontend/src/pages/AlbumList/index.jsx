import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../../components/Cards/Album";
import style from "./style";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  const getAlbums = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_APP_API_URL}/albums`);
    setAlbums(data);
  };

  useEffect(() => {
    getAlbums();
    return () => {
      console.log('cleaning');
    }
  }, [])

  const styles = style();

  return (
   <Container sx={styles.container} >
      <Grid container spacing={0} mt={5} sx={styles.grid}>
        {albums.map((album) => {
            return(<AlbumCard key={album.id} album={album} />)
          })}
      </Grid>
    </Container>
  );
}
