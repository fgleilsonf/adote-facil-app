import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Avatar, Stack, useMediaQuery} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";

const DRAWER_WIDTH = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open, hideMenu}) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: hideMenu ? 0 : DRAWER_WIDTH,
    width: `calc(100% - ${hideMenu ? 0 : DRAWER_WIDTH}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const MyToolbar = ({title}) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();

  return (
    <AppBar
      position="absolute"
      sx={{
        // display: isMobile && open ? 'none' : '',
        zIndex: 999,
        backgroundColor: '#0f8bdb'
      }}
    >
      <Toolbar
        sx={{
          pr: '24px',
          justifyContent: 'space-between',
        }}
      >
        <Stack direction={'row'} alignItems={'center'} ml={1} spacing={1}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {
              navigate('/')
            }}
            sx={{
              marginRight: '36px',
            }}
          >
            <MenuIcon/>
          </IconButton>
          {/*<Avatar*/}
          {/*  sx={{*/}
          {/*    background: '#FFF',*/}
          {/*  }}*/}
          {/*>A</Avatar>*/}
          <Typography fontWeight={'bold'} fontSize={'14px'} color={'#FFF'} onClick={() => {
            navigate('/')
          }}>
            {title}
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MyToolbar;
