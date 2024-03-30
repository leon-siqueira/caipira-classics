import axios from "axios";
import { Link } from "react-router-dom";

export default function AlbumList() {
  const options = {
    url: `${import.meta.env.VITE_APP_API_URL}/albums`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <ul>
        <li><Link to={"/albums/1"}>Album 1</Link></li>
        <li><Link to={"/albums/2"}>Album 2</Link></li>
        <li><Link to={"/albums/3"}>Album 3</Link></li>
      </ul>
    </div>
  );
}
