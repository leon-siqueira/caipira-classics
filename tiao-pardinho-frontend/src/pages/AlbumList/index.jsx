import { Container, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../../components/Cards/Album";

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
  // creata style() function to use in sx prop

  return (
   <Container sx={{display: 'flex', justifyContent: 'center'}} >
      <Grid container spacing={2} m={8} sx={{display: 'flex', justifyContent: 'center'}}>
        {albums.map((album) => {
            return(<AlbumCard key={album.id} album={album} />)
          })}
      </Grid>
    </Container>
  );
}
