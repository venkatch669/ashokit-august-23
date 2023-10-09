import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getAPI } from "../restutil";
function Post() { 
  const [tableData, setTableData] = useState([]);
  useEffect(()=>{
    getAPI('/posts2').then((res:any)=>{
      setTableData(res.data);
    }).catch((e)=>{
      console.log("error occured", e);
    })
    // :: fetch implementation ::
    // getAPI('/posts').then((e:any)=> e.json()).then((res:any)=>{
    //   setTableData(res);
    // }).catch((e)=>{

    // });
    
  },[]);
  return (
    <div>
      <h1> Post </h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">title</TableCell>
            <TableCell align="right">body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row:any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default Post;
