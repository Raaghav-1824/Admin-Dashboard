import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveBar
      data={mockBarData}
      keys={["actual", "projection"]}
      indexBy="month"
      margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
      padding={0.3}
      layout="vertical"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#B4D4FF", "#86B6F6"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: "#ccc",
              strokeWidth: 1,
            },
            text: {
              fill: "#666",
            },
          },
        },
        grid: {
          line: {
            stroke: "#e0e0e0",
          },
        },
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Month",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Value (M)",
        legendPosition: "middle",
        legendOffset: -40,
        format: (value) => `${value}M`,
      }}
      enableGridX={false}
      enableGridY={true}
      barWidth={1}
      barOpacity={0.9}
      legends={[/* ... */]}
      role="application"
      barAriaLabel={(e) => `${e.id}: ${e.formattedValue}M in ${e.indexValue}`}
    />
  );
};

BarChart.propTypes = {
  isDashboard: PropTypes.bool,
};

export default BarChart;
