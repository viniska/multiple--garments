import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, } from '@mui/material';
import Dot from '../../components/@extended/Dot';
import { NumericFormat } from 'react-number-format';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { Pagination } from 'antd';

const showTotal = (total) => `Total ${total} items`;

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs, protein };
}

const rowsPerPage = 10;
const rows = [
  createData(84564564, 'Rog Web Cam', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Headset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(98652366, 'Headset', 50, 1, 10239),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(98652366, 'Headset', 50, 1, 10239),
  createData(84564564, 'Rog Web Cam', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(84564564, 'Rog Web Cam', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(98652366, 'Headset', 50, 1, 10239),
  createData(84564564, 'Rog Web Cam', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(86739658, 'Stream Deck', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Gaming Chair', 100, 0, 14001),
  createData(84564564, 'Rog Web Cam', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Headset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348)

];

const headCells = [
  {
    id: 'trackingNo',
    align: 'left',
    disablePadding: false,
    label: 'Tracking No.',
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Product Name',
  },
  {
    id: 'fat',
    align: 'right',
    disablePadding: false,
    label: 'Total Order',
  },
  {
    id: 'carbs',
    align: 'left',
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'protein',
    align: 'right',
    disablePadding: false,
    label: 'Total Amount',
  },
];

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Pending';
      break;
    case 1:
      color = 'success';
      title = 'Delivered';
      break;
    case 2:
      color = 'error';
      title = 'Cancelled';
      break;
    default:
      color = 'primary';
      title = 'None';
      break;
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};

const OrderTable = () => {
  const paginationStyle = `
    .ant-pagination:not(:last-child) {
      margin-bottom: 24px;
    }
  `;
  const [page, setPage] = useState(1);
  const [filteredRows, setFilteredRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [sortConfig, setSortConfig] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load the initial data on component mount
    loadRows(page);
  }, [page]);

  const loadRows = (pageNumber) => {
    // Simulate an API call to fetch the data for the given page number
    const startIndex = (pageNumber - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const dataForPage = rows.slice(startIndex, endIndex);

    setFilteredRows(dataForPage);
    setTotalRows(rows.length);
  };

  // const handleSearchInputChange = (event) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);
  // };

  const handleChangePage = (pageNumber) => {
    setPage(pageNumber);
    loadRows(pageNumber);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  useEffect(() => {
    const filteredData = rows.filter((row) =>
      row.name.toLowerCase().includes(searchQuery)
    );
    setFilteredRows(filteredData);
  }, [searchQuery]);

  const handleSort = (columnId) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.column === columnId && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...filteredRows].sort((a, b) => {
      if (a[columnId] < b[columnId]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[columnId] > b[columnId]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setSortConfig({ column: columnId, direction });
    setFilteredRows(sortedData);
  };

  const getSortDirection = (columnId) => {
    if (sortConfig && sortConfig.column === columnId) {
      return sortConfig.direction === 'ascending' ? 'asc' : 'desc';
    }
    return false;
  };


  return (
    <>
      <Box sx={1}>
        <TextField
          label="Enter Product Name"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearch}
        />
        {/* <Button variant="contained" onClick={handleSearch}>Search</Button> */}
      </Box>
      <style>{paginationStyle}</style>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.align}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  sortDirection={getSortDirection(headCell.id)}
                >
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => handleSort(headCell.id)}
                  >
                    {headCell.label}
                    {getSortDirection(headCell.id) === 'asc' && (
                      <KeyboardArrowUp fontSize="small" />
                    )}
                    {getSortDirection(headCell.id) === 'desc' && (
                      <KeyboardArrowDown fontSize="small" />
                    )}
                  </Link>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.trackingNo}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell>
                  <OrderStatus status={row.carbs} />
                </TableCell>
                <TableCell align="right">
                  <NumericFormat
                    value={row.protein}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'₹'}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2}>
        <Pagination
          current={page}
          pageSize={rowsPerPage}
          total={totalRows}
          showTotal={showTotal}
          onChange={handleChangePage}
          showSizeChanger
          showQuickJumper
        />
      </Box>
    </>
  );
};

export default OrderTable;
