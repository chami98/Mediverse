import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BorderBottom } from "@mui/icons-material";

const ExportDiagnosisTable = ({ symptomChecked }) => {
  function createData(code, Beschreibung) {
    return { code, Beschreibung };
  }

  const rows = [
    createData("Frozen yoghurt", 159),
    createData("Ice cream sandwich", 237),
  ];
  return (
    <TableContainer sx={{ marginTop: "34px" }}>
      <Table sx={{}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Beschreibung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {symptomChecked.map((symptoms) => (
            <TableRow
              key={symptoms.code}
              sx={
                {
                  // "&:last-child td, &:last-child th": { border: 0 },
                }
              }
            >
              <TableCell component="th" scope="row">
                {symptoms.code}
              </TableCell>
              <TableCell>{symptoms.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExportDiagnosisTable;
