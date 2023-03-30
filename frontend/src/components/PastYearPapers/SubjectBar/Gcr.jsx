import React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getGCRLink } from '../../../http';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export const Gcr = ({branch, semester}) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    console.log(branch, semester);
    getGCRLink(branch, semester).then(res=>{
      let newrow = [];
      res.data.forEach(obj => {
        let SUBJECT = obj.SUBJECT;
        let LINK = obj.LINK;
        newrow.push({SUBJECT, LINK});
      });
      setRows(newrow);
    }).catch(err=>{
      console.log(err);
    })
  }, [])
  
  

  return (
    <>
        <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell align="right">GCR Link&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.SUBJECT}>
              <StyledTableCell component="th" scope="row">
                {row.SUBJECT} 
              </StyledTableCell>
              <StyledTableCell align="right"> <a href="https://www.google.com">{row.LINK}</a> </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
