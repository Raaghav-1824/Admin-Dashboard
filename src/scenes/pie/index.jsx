import React from 'react';
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChartWithTable from "../../components/ProgressCircle";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        < PieChartWithTable/>
      </Box>
    </Box>
  );
};

export default Pie;
