import { Route, Routes } from 'react-router-dom';
import AlbumList from './pages/AlbumList/index';
import Album from './pages/Album/index';
import TrackList from './pages/TrackList/index';
import Track from './pages/Track/index';
import Header from './components/common/Header';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<AlbumList />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:id" element={<Album />} />
        <Route path="/tracks/:id" element={<Track />} />
        <Route path="/tracks" element={<TrackList />} />
      </Routes>
    </>
  );
}
