import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default function FixedSpacing() {
  return (
    <Box sx={{width: 500, minHeight: 377}}>
      <Masonry columns={3} spacing={3}>
        {heights.map((height, index) => (
          <Item key={index} sx={{height}}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
