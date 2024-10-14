import React from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";

import PieChart from "../../components/ProgressCircle";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box margin="12px 20px " paddingBottom={2}>
      {/* HEADER */}
      <Box height="2px" backgroundColor="#E0E0E0" my="5px" />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography
          variant="h4"
          fontWeight="600"
          sx={{ padding: "10px 20px 10px 10px" }}
        >
          eCommerce
        </Typography>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="28px"
      >
        {/* ROW 1 */}
        {/* Row 1 Box 1 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gap="28px"
          padding="10px"
        >
          <Box
            display="flex"
            borderRadius="20px"
            backgroundColor="#E3F5FF"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="3,781"
              subtitle="Customer"
              progress="0.75"
              increase="+14%"
              icon={<PersonAddIcon sx={{ color: "black", fontSize: "26px" }} />}
            />
          </Box>
          <Box
            display="flex"
            borderRadius="20px"
            backgroundColor="#F7F9FB"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,219"
              subtitle="Orders"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon sx={{ color: "black", fontSize: "26px" }} />
              }
            />
          </Box>
          <Box
            display="flex"
            borderRadius="20px"
            backgroundColor="#F7F9FB"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="$695"
              subtitle="Revenue"
              progress="0.30"
              increase="+5%"
              icon={
                <AccountBalanceOutlinedIcon
                  sx={{ color: "black", fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            display="flex"
            borderRadius="20px"
            backgroundColor="#E5ECF6"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="30.1%"
              subtitle="Growth"
              progress="0.80"
              increase="+43%"
              icon={<TrafficIcon sx={{ color: "black", fontSize: "26px" }} />}
            />
          </Box>
        </Box>

        {/* Row 1 Box 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor="#F7F9FB"
          overflow="auto"
          borderRadius="20px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Projections vs Actuals
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor="#F7F9FB"
          borderRadius="20px"
        >
          <Box
            mt="25px"
            p="0 20px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Revenue
              </Typography>

              <Typography variant="h4" fontWeight="bold" color="black">
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          borderRadius="20px"
          backgroundColor="#F7F9FB"
          overflow="auto"
        >
          <PieChart />
          {/* <PieChart /> */}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          borderRadius="20px"
          backgroundColor="#F7F9FB"
          p="30px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="5px"
          >
            <Typography color="black" variant="h5" fontWeight="600">
              Top Selling Products
            </Typography>
          </Box>

          {/* Table header */}
          <Box
            display="flex"
            justifyContent="space-between"
            p="10px 15px"
            borderBottom="1px solid #E0E0E0"
          >
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color={colors.grey[700]}
              style={{ flex: 1 }}
            >
              Name
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color={colors.grey[700]}
              style={{ flex: 1, textAlign: "center" }}
            >
              Price
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color={colors.grey[700]}
              style={{ flex: 1, textAlign: "center" }}
            >
              Quantity
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              color={colors.grey[700]}
              style={{ flex: 1, textAlign: "right" }}
            >
              Amount
            </Typography>
          </Box>

          {/* Data rows */}
          <Box height="200px" overflow="auto">
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p="10px 15px"
              >
                <Typography
                  color="black"
                  variant="body1"
                  fontWeight="500"
                  style={{ flex: 1 }}
                >
                  {transaction.Name}
                </Typography>
                <Typography
                  color="black"
                  variant="body1"
                  fontWeight="500"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  {transaction.Price}
                </Typography>
                <Typography
                  color="black"
                  variant="body1"
                  fontWeight="500"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  {transaction.Quantity}
                </Typography>
                <Typography
                  color="black"
                  variant="body1"
                  fontWeight="500"
                  style={{ flex: 1, textAlign: "right" }}
                >
                  ${transaction.Amount}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor="#F7F9FB"
          borderRadius="20px"
          overflow="auto"
        >
          <GeographyChart isDashboard={true} />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
