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
  const getStatus = (data: number) => {
    let res = "High";
    if (data < 4) res = "Low";
    else if (data < 8) res = "Medium";
    return res;
  };
  const renderCell = (row: any, col: any) => {
    switch (col.type) {
      case "status": {
        const status = getStatus(row[col.field]);
        return (
          <div className={`status-table-container ${status.toLowerCase()}`}>
            <label className={`status-table ${status.toLowerCase()}-title`}>
              {status}
            </label>
          </div>
        );
      }
      default:
        return <>{row[col.field]}</>;
    }
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        display: "flex",
        width: "90%",
        boxShadow: "none",
      }}
    >
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
                <TableCell key={column.field}>
                  {renderCell(row, column)}
                </TableCell>
              ))}
              <TableCell>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src={ThreeDots} className="input-svg pointer" />
                </div>
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
