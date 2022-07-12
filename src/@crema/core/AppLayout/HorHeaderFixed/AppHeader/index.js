import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import {toggleNavCollapsed} from 'redux/actions';
import MenuIcon from '@mui/icons-material/Menu';
import {useDispatch} from 'react-redux';
import {alpha} from '@mui/material/styles';
import AppLogo from '../../components/AppLogo';
import HorizontalNav from '../../components/HorizontalNav';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AppHeader = () => {

  const dispatch = useDispatch();
  const {sidebarMenuSelectedBgColor, sidebarMenuSelectedTextColor} =
    useSidebarContext();

  return (
    <>
      <AppBar
        color='inherit'
        sx={{
          boxShadow: 'none',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
          backgroundColor: 'background.paper',
          width: {
            xs: '100%',
          },
        }}
        className='app-bar'
      >
        <Toolbar
          sx={{
            boxSizing: 'border-box',
            minHeight: {xs: 56, sm: 70},
            px: {xs: 0},
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: {lg: 1140, xl: 1420},
              mx: 'auto',
              px: 5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Hidden lgUp>
              <IconButton
                sx={{
                  marginRight: (theme) => theme.spacing(2),
                  color: 'text.secondary',
                }}
                edge='start'
                className='menu-btn'
                color='inherit'
                aria-label='open drawer'
                onClick={() => dispatch(toggleNavCollapsed())}
                size='large'
              >
                <MenuIcon
                  sx={{
                    width: 35,
                    height: 35,
                  }}
                />
              </IconButton>
            </Hidden>

            <Box
              sx={{
                mr: 2,
                '& .app-logo': {
                  pl: 0,
                },
                '& .logo-text': {
                  display: {xs: 'none', sm: 'block'},
                },
              }}
            >
              <AppLogo />
            </Box>
            <Hidden lgDown>
              <Box
                sx={{
                  ml: 5,
                  '& .navbarNav': {
                    display: 'flex',
                    padding: 0,
                    mx: {xs: -4, lg: -5},
                    marginRight: -16,
                  },
                  '& .navItem': {
                    width: 'auto',
                    cursor: 'pointer',
                    px: {xs: 4, lg: 5},
                    py: 1,
                    borderRadius: 1,
                    '&.active': {
                      color: sidebarMenuSelectedTextColor,
                      backgroundColor: alpha(sidebarMenuSelectedBgColor, 0.8),
                      '& .navLinkIcon': {
                        color: (theme) => theme.palette.secondary.main,
                      },
                    },
                  },
                  '& .navLinkIcon': {
                    mr: 2.5,
                    color: (theme) => theme.palette.common.white,
                    fontSize: 20,
                  },
                }}
              >
                <HorizontalNav />
              </Box>
            </Hidden>

            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box
              sx={{
                minHeight: 40,
                position: 'relative',
                display: {xs: 'none', sm: 'block'},
                '& .searchRoot': {
                  position: {xs: 'absolute', sm: 'relative'},
                  right: {xs: 0, sm: 'auto'},
                  top: {xs: 0, sm: 'auto'},
                },
              }}
            >
           
            </Box>
            <Box
              sx={{
                ml: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Stack spacing={2} direction="row">
                <Button variant="outlined">LogIn</Button>
                <Button variant="contained">Sign Up</Button>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default AppHeader;
