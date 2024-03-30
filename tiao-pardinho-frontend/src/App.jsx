import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/index';
import AlbumList from './pages/AlbumList/index';
import Album from './pages/Album/index';
import TrackList from './pages/TrackList/index';
import Track from './pages/Track/index';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/albums" element={<AlbumList />} />
            <Route path="/albums/:id" element={<Album />} />
            <Route path="/tracks/:id" element={<Track />} />
            <Route path="/tracks" element={<TrackList />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
