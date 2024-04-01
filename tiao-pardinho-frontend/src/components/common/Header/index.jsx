import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar/index';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import style from './style';

export default function Header() {
  const styles = style();
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar sx={styles.toolbar}>
          <Link to="/">
            <Typography variant="h6">
              Caipira Classics 🤠
            </Typography>
          </Link>
          <SearchBar />
          <Tabs value={0}>
            <Link to="/albums">
              <Tab label="Albums" />
            </Link>
            <Link to="/tracks">
              <Tab label="Tracks" />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
