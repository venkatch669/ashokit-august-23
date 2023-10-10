import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
export default function TableComp(props:any){
    return(
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                <TableCell>UserId</TableCell>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">body</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.tableData?.map((row:any) => (
                <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell>
                        <button onClick={()=> props.setRecordFun(row)}>
                            <CreateIcon/>
                        </button>
                    </TableCell>
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
    )
}