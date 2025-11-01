import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const programs = [
  {
    code: "5230600",
    name: "Финансы",
    form: "Очная",
    duration: "4 года",
    cost: "32 МРОТ",
    seats: 50,
    oldCode: "1-25 01 04 – «Финансы и кредит»",
  },
  {
    code: "5230900",
    name: "Бухгалтерский учёт и аудит",
    form: "Очная",
    duration: "4 года",
    cost: "32 МРОТ",
    seats: 25,
    oldCode: "1-25 01 08 – «Бухгалтерский учёт, анализ и аудит»",
  },
];

const ProgramsTable = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 6 } }}>
      <TableContainer sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f7fa" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>
                Направление обучения
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Форма обучения</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>
                Длительность обучения
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Стоимость обучения</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Количество мест</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {programs.map((row, index) => (
              <React.Fragment key={index}>
                <TableRow hover>
                  <TableCell>
                    {row.code} – «{row.name}»
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {row.oldCode}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.form}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.cost}</TableCell>
                  <TableCell>{row.seats}</TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProgramsTable;
