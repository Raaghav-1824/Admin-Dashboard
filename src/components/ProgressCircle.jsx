import { ResponsivePie } from "@nivo/pie";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { useState } from "react";

const PieChartWithTable = () => {
  const [hoveredSlice, setHoveredSlice] = useState(null);

  // Data for the pie chart and table
  const data = [
    { id: "Direct", label: "Direct", value: 1215, color: "#A594F9" },
    { id: "Affilliate", label: "Affilliate", value: 2490, color: "black" },
    { id: "Sponsered", label: "Sponsered", value: 1275, color: "#5AB2FF" },
    { id: "E-mail", label: "E-mail", value: 5020, color: "#B6FFA1" },
  ];

  const totalValue = data.reduce((acc, slice) => acc + slice.value, 0);

  const defaultLabel = "Weekly Sales";
  const defaultValue = "$86,400";

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={2}
      padding={1}
      bgcolor="#F7F9FB"
      borderRadius={3}
      boxShadow="0px 2px 10px rgba(0, 0, 0, 0.1)"
    >
      {/* Column for the Title */}
      <Box textAlign="left" width="100%" sx={{ marginTop: 1.5, marginLeft: 2 }}>
        <Typography variant="h5" fontWeight="600" paddingleft={2}>
          Total Sales
        </Typography>
      </Box>

      {/* Row for Pie Chart and Table */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        width="95%"
      >
        {/* Pie Chart */}
        <Box
          flexDirection="row"
          position="relative"
          width="250px"
          height="230px"
          padding={1}
        >
          <ResponsivePie
            data={data}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            innerRadius={0.7}
            padAngle={1.5}
            cornerRadius={3}
            colors={{ datum: "data.color" }}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            onMouseEnter={(slice) => setHoveredSlice(slice)}
            onMouseLeave={() => setHoveredSlice(null)}
            tooltip={() => null}
          />
          {/* Central Dynamic Label */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            style={{
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" fontWeight="bold">
              {hoveredSlice
                ? `$${hoveredSlice.value.toFixed(2)}`
                : defaultValue}
            </Typography>
            <Typography variant="h6" color="#9E9E9E">
              {hoveredSlice ? hoveredSlice.id : defaultLabel}
            </Typography>
          </Box>
        </Box>
      </Box>
      <TableContainer
        elevation={0}
        style={{ width: "85%", height: "100%", padding: "8px", margin: "20px" }}
      >
        <Table>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                style={{
                  backgroundColor:
                    hoveredSlice && hoveredSlice.id === row.id
                      ? "#E0F7FA"
                      : "transparent",
                }}
              >
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box
                      width={8}
                      height={8}
                      borderRadius="50%"
                      style={{
                        backgroundColor: row.color,
                        marginRight: "10px",
                      }}
                    />
                    <Typography variant="h6">{row.label}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "14px" }}
                    padding="1px"
                    variant="body1"
                  >
                    ${row.value.toFixed(2)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PieChartWithTable;
