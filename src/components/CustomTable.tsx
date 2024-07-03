import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import PropTypes from "prop-types";
import ThreeDots from "../assets/components-icons/three-dots.svg";

const CustomTable = ({ columns, data }: any) => {
  return (
    <TableContainer component={Paper} sx={{ display: "flex", width: "90%" }}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column: any) => (
              <TableCell sx={{ fontWeight: 600 }} key={column.field}>
                {column.headerName}
              </TableCell>
            ))}
            <TableCell sx={{ fontWeight: 600 }}>{""}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, rowIndex: number) => (
            <TableRow
              key={rowIndex}
              sx={{ cursor: row.onClick ? "pointer" : "auto" }}
              onClick={row.onClick}
            >
              {columns.map((column: any) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
              <TableCell>
                <img src={ThreeDots} className="input-svg pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CustomTable;
