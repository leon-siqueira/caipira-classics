import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar/index';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material';
import style from './style';

export default function Header() {
  const styles = style();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const logoText = isSmallScreen ? "🤠" : "Caipira Classics 🤠";
  const logoSize = isSmallScreen ? "h3" : "h6";

  return (
    <>
      <AppBar position="static" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Link to="/">
            <Typography variant={logoSize} sx={styles.logo}>
              {logoText}
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
