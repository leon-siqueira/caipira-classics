import { Link } from "react-router-dom";

export default function AlbumList() {
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
