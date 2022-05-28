import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export default function TablePaginationDemo(props) {
  //   const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    props.rowsPerPage(parseInt(event.target.value, 10));
    //setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={props.count}
      page={props.page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
