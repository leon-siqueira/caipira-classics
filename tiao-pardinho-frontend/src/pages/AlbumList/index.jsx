import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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


  return (
    <div>
      <ul>
        {albums.map((album) => {
            return(<li key={album.id}><Link to={`/albums/${album.id}`}>{album.name}</Link></li>)
          })}
      </ul>
    </div>
  );
}
