import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header/index';
import AlbumList from './pages/AlbumList/index';
import Album from './pages/Album/index';
import TrackList from './pages/TrackList/index';
import Track from './pages/Track/index';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/albums/:id" component={Album} />
          <Route path="/albums" component={AlbumList} />
          <Route path="/tracks/:id" component={Track} />
          <Route path="/tracks" component={TrackList} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
