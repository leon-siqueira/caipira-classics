import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar/index';


export default function Header() {
  return (
    <>
      <header>
        <h1>Music Player</h1>
        <SearchBar />
        <nav>
          <ul>
            <Link to="/albums">Albums</Link>
            <Link to="/tracks">Tracks</Link>
          </ul>
        </nav>

        <Outlet />
      </header>
    </>
  )
}
