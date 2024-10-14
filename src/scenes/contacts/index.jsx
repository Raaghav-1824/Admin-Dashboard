import React from 'react';
import { Box, Avatar, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person"; 

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "registrarId", headerName: "Order ID", flex: 0.5 },
    {
      field: "name",
      headerName: "User",
      flex: 1,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <Avatar
            sx={{
              bgcolor: colors.blueAccent[700],
              width: 24, 
              height: 24, 
              marginRight: 1,
            }}
          >
            <PersonIcon sx={{ fontSize: 16 }} /> 
          </Avatar>
          <Typography>{params.row.name}</Typography>
        </Box>
      ),
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "orderStatus",
      headerName: "Order Status",
      flex: 1,
      renderCell: (params) => {
        let color = "blue"; 

        switch (params.value) {
          case "In Progress":
            color = "#8A2BE2"; 
            break;
          case "Completed":
            color = "#008000"; 
            break;
          case "Approved":
            color = "#EC8305"; 
            break;
          case "Pending":
            color = "#0000FF"; 
            break;
          default:
            color = "blue"; 
        }

        return (
          <Typography style={{ color }}>
            {params.value}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header subtitle="Order List" />
      <Box
        justifyContent="center"
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#F7F9FB",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#F7F9FB",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataOrders}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.registrarId} // Use registrarId as the unique identifier
          autoHeight
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Contacts;
