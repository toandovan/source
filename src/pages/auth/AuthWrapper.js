import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
const AuthWrapper = ({children}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          minHeight: {xs: 320, sm: 450},
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: {xs: '100%', sm: '50%', lg: '40%'},
            padding: {xs: 5, lg: 10},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            width: {xs: '100%', sm: '50%', lg: '60%'},
            position: 'relative',
            padding: {xs: 5, lg: 10},
            display: {xs: 'none', sm: 'flex'},
            alignItems: {sm: 'center'},
            justifyContent: {sm: 'center'},
            flexDirection: {sm: 'column'},
            backgroundImage: 'url("/assets/images/Shape.png")',
            backgroundRepeat: 'no-repeat',
            color: (theme) => theme.palette.common.white,
            fontSize: 14,
          }}
        >
          <Box
            sx={{
              
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 250,
                height: 350,
              },
            }}
          >
            <Paper elevation={0} sx={{
               
            }}>
              <CardMedia>
                <img
                src={'/assets/images/home.png'}
                style={{
                  padding: '10px',
                }}
                >
                </img>
              </CardMedia>
            </Paper>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
