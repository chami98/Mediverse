import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ExportDiagnosisTable = ({ symptomChecked }) => {
  function createData(code, Beschreibung) {
    return { code, Beschreibung };
  }

  const rows = [
    createData("Frozen yoghurt", 159),
    createData("Ice cream sandwich", 237),
  ];
  return (
    <TableContainer sx={{ marginTop: "34px" }} component={Paper}>
      <Table sx={{}} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Beschreibung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {symptomChecked.map((symptom) => (
            <TableRow
              key={symptom.code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {symptom.code}
              </TableCell>
              <TableCell>{symptom.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExportDiagnosisTable;
