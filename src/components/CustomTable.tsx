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
import DropdownButton from "./DropdownButton";
import { useData } from "../context/DataContext";

interface TableProps {
  columns: any[];
  data: any;
  options?: any[];
}
const CustomTable = ({ columns, data, options = [] }: TableProps) => {
  const { currentData, setCurrentData } = useData();

  const getStatus = (data: number) => {
    let res = "High";
    if (data < 4) res = "Low";
    else if (data < 8) res = "Medium";
    return res;
  };

  const btn = {
    name: "",
    src: ThreeDots,
    options: options,
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
          {data.map((row: any, rowIndex: number) => {
            const property = btn.options.find(
              (option) => option.name === "Show Properties"
            );
            if (property) {
              property.onPress = row.onClick;
            }
            return (
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
                    <DropdownButton btn={btn} />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
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
