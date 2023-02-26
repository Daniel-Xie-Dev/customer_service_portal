import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const sentMessages = [
  {
    id: 0,
    fromEmail: "testemail0@email.com",
    message: "The color is wrong",
    customerId: "1234",
    date: "2023-01-22",
  },
  {
    id: 1,
    fromEmail: "testemail1@email.com",
    message: "The color is wrong",
    customerId: "5678",
    date: "2022-12-31",
  },
  {
    id: 2,
    fromEmail: "testemail2@email.com",
    message: "The color is wrong",
    customerId: "9012",
    date: "2023-01-03",
  },
  {
    id: 3,
    fromEmail: "testemail3@email.com",
    message: "The color is wrong",
    customerId: "3456",
    date: "2022-12-29",
  },
  {
    id: 4,
    fromEmail: "testemail4@email.com",
    message: "The color is wrong",
    customerId: "7890",
    date: "2023-01-15",
  },
  {
    id: 5,
    fromEmail: "testemail5@email.com",
    message: "The color is wrong",
    customerId: "2345",
    date: "2023-01-28",
  },
  {
    id: 6,
    fromEmail: "testemail6@email.com",
    message: "The color is wrong",
    customerId: "6789",
    date: "2023-01-10",
  },
  {
    id: 7,
    fromEmail: "testemail7@email.com",
    message: "The color is wrong",
    customerId: "0123",
    date: "2022-12-25",
  },
  {
    id: 8,
    fromEmail: "testemail8@email.com",
    message: "The color is wrong",
    customerId: "4567",
    date: "2023-01-18",
  },
  {
    id: 9,
    fromEmail: "testemail9@email.com",
    message: "The color is wrong",
    customerId: "8901",
    date: "2023-01-07",
  },
];

function Row(props) {
  const { data, isSelected, index, handleCheck } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" }, borderBottom: open ? "none" : "1px" }}
        style={{ backgroundColor: isSelected ? "#3f51b5" : "white" }}
      >
        <TableCell>
          <Checkbox
            checked={isSelected}
            onChange={(event) => {
              event.target.checked ? handleCheck(true, index) : handleCheck(false, index);
            }}
          />
        </TableCell>
        <TableCell component="th" scope="row">
          {data.fromEmail}
        </TableCell>
        <TableCell align="left">{data.customerId}</TableCell>
        <TableCell align="left">{data.id}</TableCell>
        <TableCell align="left">{data.date}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            backgroundColor: isSelected ? "#3f51b5" : "white",
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Customer Message
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }}>{data.message}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function AdminComponent() {
  const [selected, setSelected] = useState(new Set());

  const handleCheck = (isChecked, index) => {
    isChecked
      ? setSelected(new Set([...selected, index]))
      : setSelected(new Set([...selected].filter((i) => i !== index)));
  };

  return (
    <div
      className="AdminComponent"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div className="AdminComponentContainer" style={{ width: "70%", margin: "auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    indeterminate={selected.size !== 0 && selected.size !== sentMessages.length}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelected(
                          new Set(
                            sentMessages.map((_, index) => {
                              return index;
                            })
                          )
                        );
                      } else {
                        setSelected(new Set());
                      }
                    }}
                  />
                </TableCell>
                <TableCell>Customer Email</TableCell>
                <TableCell align="left">Customer ID</TableCell>
                <TableCell align="left">Transaction ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {sentMessages.map((message, index) => {
                return (
                  <Row
                    key={message.id}
                    data={message}
                    index={index}
                    isSelected={selected.has(index)}
                    handleCheck={handleCheck}
                  ></Row>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default AdminComponent;
