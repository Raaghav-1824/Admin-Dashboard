import React from "react";
import PropTypes from "prop-types";
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures"; 
import { tokens } from "../theme";
import { mockGeographyData as mapData } from "../data/mockData"; 
import { useTheme } from "@mui/material";

export const tableData = [
  { city: "California", shorthand: "CA", distribution: 150000 },
  { city: "Texas", shorthand: "TX", distribution: 75000 },
  { city: "Florida", shorthand: "FL", distribution: 60000 },
  { city: "New York", shorthand: "NY", distribution: 90000 },
  { city: "Illinois", shorthand: "IL", distribution: 50000 },
];

const GeographyChartWithTable = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const mainBgColor = "#f5f7fa";

  const renderCountryIcon = (shorthand) => {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="30px"
        height="30px"
        borderRadius="50%"
        bgcolor={colors.primary.main}
        fontWeight="bold"
        fontSize="14px"
        sx={{ border: "2px solid #fff" }}
      >
        {shorthand}
      </Box>
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      p={2}
      justifyContent="center"
      alignItems="center"
      borderRadius="12px"
      bgcolor={mainBgColor}
    >
      <Typography width="100%" variant="h5" fontWeight="600" sx={{ marginTop: 1.5, marginLeft: 2 }}>
        Electric Vehicle Distribution 
      </Typography>

      <Box display="flex" flexDirection="row" width="100%" alignItems="center" justifyContent="center">
        <Box flex={1} width="100%" height="200px" borderRadius="12px" overflow="hidden" alignItems="center">
          <ResponsiveChoropleth
            data={mapData} // Adjust this to match vehicle distribution data structure
            theme={{
              axis: {
                domain: { line: { stroke: colors.grey[100] }},
                legend: { text: { fill: colors.grey[100] }},
                ticks: { line: { stroke: colors.grey[100], strokeWidth: 1 }, text: { fill: colors.grey[100] }},
              },
              legends: { text: { fill: colors.grey[100] }},
            }}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            domain={[0, 100000]}
            unknownColor="#f0f0f0"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 45 : 120}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            fill={[
              { match: { id: "USA" }, color: "#FF4081" },
              { match: { id: "RUS" }, color: "#000000" },
              { match: { id: "BRA" }, color: "#FF4081" },
              { match: { id: "CHN" }, color: "#FF4081" },
            ]}
          />
        </Box>
      </Box>

      <Box sx={{ marginTop: 3, marginBottom: 0.5 }} padding="10px" width="90%" height="250px">
        <TableContainer elevation={0} sx={{ boxShadow: "none", bgcolor: mainBgColor, maxHeight: "400px", overflowY: "auto" }}>
          <Table sx={{ borderCollapse: "collapse" }}>
            <TableBody>
              {tableData.map((location) => (
                <TableRow key={location.city} hover>
                  <TableCell sx={{ padding: "8px 8px", borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
                    <Box display="flex" alignItems="center">
                      {renderCountryIcon(location.shorthand)}{" "}
                      <Typography variant="body1" sx={{ fontWeight: 500, marginLeft: "10px", fontSize: "14px" }}>
                        {location.city}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right" sx={{ padding: "8px 5px", fontWeight: "500", borderBottom: "1px solid rgba(224, 224, 224, 1)" }}>
                    <Typography textAlign="center" variant="body1" sx={{ fontWeight: "bold", fontSize: "14px" }}>
                      {`${location.distribution} EVs`} 
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

GeographyChartWithTable.propTypes = {
  isDashboard: PropTypes.bool,
};

export default GeographyChartWithTable;
