import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { Button, MenuItem, TextField } from "@mui/material";

const URL = process.env.REACT_APP_WEBSOCKET_URL;

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
          {data.email}
        </TableCell>
        <TableCell align="left">{data.id}</TableCell>
        {/* <TableCell align="left">{data.id}</TableCell> */}
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
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(1);

  const handleCheck = (isChecked, index) => {
    isChecked
      ? setSelected(new Set([...selected, index]))
      : setSelected(new Set([...selected].filter((i) => i !== index)));
  };

  useEffect(() => {
    const getMessages = async () => {
      await axios
        .get(process.env.REACT_APP_GET_MESSAGES)
        .then((result) => {
          console.log(result.data);
          setMessages(
            result.data.sort((a, b) => {
              const A = new Date(a.date);
              const B = new Date(b.date);
              return B - A;
            })
          );
        })
        .catch((error) => console.log(error));

      // const response = await fetch(process.env.REACT_APP_GET_MESSAGES);

      // const data = await response.json();
    };

    getMessages();
  }, []);

  return (
    <div
      className="AdminComponent"
      style={{
        width: "100%",
        height: "100%",
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
                    indeterminate={selected.size !== 0 && selected.size !== messages.length}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setSelected(
                          new Set(
                            messages.map((_, index) => {
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
                <TableCell align="left">Message ID</TableCell>
                {/* <TableCell align="left">Transaction ID</TableCell> */}
                <TableCell align="left">Date</TableCell>

                <TableCell align="left">
                  <TextField
                    // id="filled-basic"
                    label={`${page}`}
                    select
                    noValidate
                    defaultValue={"1"}
                  >
                    {messages.map((items, index) => {
                      if (index % 5 === 0) {
                        const pageNumber = Math.floor(index / 5) + 1;
                        return (
                          <MenuItem onClick={() => setPage(pageNumber)}>{`${pageNumber}`}</MenuItem>
                        );
                      }
                    })}
                  </TextField>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {messages.map((message, index) => {
                if (index >= (page - 1) * 5 && index < (page - 1) * 5 + 5) {
                  return (
                    <Row
                      key={message.id}
                      data={message}
                      index={index}
                      isSelected={selected.has(index)}
                      handleCheck={handleCheck}
                    ></Row>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default AdminComponent;
