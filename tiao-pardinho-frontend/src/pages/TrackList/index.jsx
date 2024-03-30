import { Link } from "react-router-dom";

export default function TrackList() {
  return (
    <div>
      <ul>
        <li><Link to={"/Tracks/1"}>Track 1</Link></li>
        <li><Link to={"/Tracks/2"}>Track 2</Link></li>
        <li><Link to={"/Tracks/3"}>Track 3</Link></li>
      </ul>
    </div>
  );
}
