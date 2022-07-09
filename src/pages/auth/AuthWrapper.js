import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { Divider, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
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
            width: {xs: '100%', sm: '50%', lg: '50%'},
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
            width: {xs: '100%', sm: '50%', lg: '50%'},
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
                <Box sx={{
                  display: 'flex',
                }}>
                  <Box sx={{
                    width: '80%'
                  }}>
                    <Typography>Beverly Springfield</Typography>
                    <Typography>2821 Sevilla, Palm Harbor, TX</Typography>
                  </Box>
                  <Box>
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                  </Box>
                </Box>
                <Divider></Divider>
                <Box sx={{
                  display: 'inline-flex',
                  fontSize: '15px'
                }}>
                  <BedOutlinedIcon sx={{
                    fontSize : '15px'
                  }}></BedOutlinedIcon>4 Beds
                  <BathtubOutlinedIcon sx={{
                    fontSize : '15px'
                  }}></BathtubOutlinedIcon>2 Bathrooms
                  <CropSquareOutlinedIcon sx={{
                    fontSize : '15px'
                  }}></CropSquareOutlinedIcon>6x7,5m
                </Box>
                <Box>
                  ANSI
                </Box>
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
