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
import rawData from '../data/electric_vehicle_data.json'; 

const vibrantColors = [
  '#FF3D00', // Vibrant red
  '#FF9800', // Vibrant orange
  '#FFEB3B', // Vibrant yellow
  '#4CAF50', // Vibrant green
  '#2196F3', // Vibrant blue
];

const aggregateData = (data) => {
  const makeCount = {};

  data.forEach(vehicle => {
    const make = vehicle.Make;
    makeCount[make] = (makeCount[make] || 0) + 1;
  });

  const sortedMakes = Object.entries(makeCount)
    .map(([id, value]) => ({ id, value }))
    .sort((a, b) => b.value - a.value);

  return sortedMakes.slice(0, 5).map((item, index) => ({
    ...item,
    color: vibrantColors[index % vibrantColors.length], 
  }));
};

const SalesChart = () => {
  const [highlighted, setHighlighted] = useState(null); // Define both highlighted and setHighlighted
  const salesData = aggregateData(rawData); 
  console.log(highlighted);

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#f7f9fb',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Top Electric Vehicle Makes
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
          tooltip={({ datum: { id, value } }) => (
            <Box
              sx={{
                padding: '4px 8px',
                background: '#1c1c1ccc',
                borderRadius: '8px',
                color: '#fff',
              }}
            >
              {`${id}: ${value}`}
            </Box>
          )}
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
                  <Typography>{data.value}</Typography>
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
