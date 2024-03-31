import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar/index';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6">
            Clássicos caipiras 🤠
          </Typography>
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
