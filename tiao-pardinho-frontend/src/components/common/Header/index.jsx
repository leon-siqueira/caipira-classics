import { Link, Outlet } from 'react-router-dom';
import SearchBar from '../SearchBar/index';
import { AppBar, Tab, Tabs, Toolbar, Typography, useMediaQuery } from '@mui/material';
import style from './style';
import { useState } from 'react';

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

export default function Header() {
  const styles = style();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const logoText = isSmallScreen ? "🤠" : "Caipira Classics 🤠";
  const logoSize = isSmallScreen ? "h3" : "h6";
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== 'click' ||
      (event.type === 'click' && samePageLinkNavigation(event))
    ) {
      setValue(newValue);
    }
  };

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
          <Tabs value={value} onChange={handleChange} role='navigation' sx={styles.tabs}>
            <Tab label="Albums" component={Link} to={'/albums'} />
            <Tab label="Tracks" component={Link} to={'/tracks'} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
}
