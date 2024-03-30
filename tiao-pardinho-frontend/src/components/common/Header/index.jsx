import { SearchBar } from '../SearchBar/index';

function Header() {
  return (
    <header>
      <h1>Music Player</h1>
      <SearchBar />
      <nav>
        <ul>
          <li><a href="/albums">Albums</a></li>
          <li><a href="/tracks">Tracks</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
