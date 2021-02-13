import React from 'react';
import { AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffffff',
  },
  background: {
    backgroundColor: '#000000'
  }
}));

function Header(props) {

  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.background}>
      <Toolbar>
        <Box display='flex' flexGrow={1}>
          <Typography variant="h5">
            <Link to='/' className={classes.title}>JAM</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;