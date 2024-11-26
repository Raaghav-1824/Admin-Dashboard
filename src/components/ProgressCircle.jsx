import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const salesData = [
  { id: 'Direct', value: 300.56, color: '#000000' },
  { id: 'Affiliate', value: 135.18, color: '#CEF0E6' },
  { id: 'Sponsored', value: 154.02, color: '#8AB0F9' },
  { id: 'E-mail', value: 48.96, color: '#A5BCFF' },
];

const SalesChart = () => {
  const [, setHighlighted] = useState(null);

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: '#f7f9fb',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" gutterBottom>
        Total Sales
      </Typography>
      <Box sx={{ height: '280px', position: 'relative' }}>
        <ResponsivePie
          data={salesData}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          colors={{ datum: 'data.color' }}
          innerRadius={0.6}
          padAngle={1}
          cornerRadius={3}
          activeOuterRadiusOffset={10}
          onMouseEnter={(data) => setHighlighted(data)}
          onMouseLeave={() => setHighlighted(null)}
          // tooltip={({ datum: { id, value, color } }) => (
          //   <Box
          //     sx={{
          //       padding: '4px 8px',
          //       background: '#1c1c1ccc',
          //       borderRadius: '8px',
          //       color: '#fff'
          //     }}
          //   >
          //     {`${id}: ${value}`}
          //   </Box>
          // )}
        />
        
      </Box>
      <TableContainer>
        <Table>
          <TableBody>
            {salesData.map((data) => (
              <TableRow key={data.id}>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Box
                    sx={{
                      width: '16px',
                      height: '16px',
                      bgcolor: data.color,
                      borderRadius: '50%',
                    }}
                  />
                  <Typography>{data.id}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>${data.value.toFixed(2)}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SalesChart;
