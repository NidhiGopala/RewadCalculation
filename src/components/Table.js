import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableComponent = ({ columns, rows,header}) => {

    return (
        <>
        <h3 style={{textAlign:"center"}}>{header}</h3>
        <TableContainer sx={{ minWidth: 650, maxWidth: "60%", maxHeight:250 }} style={{ margin: "auto", padding:"20px"}} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            columns.map(data =>
                                <TableCell align="right">{data.Header}</TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((row, i) => (
                        <TableRow
                            key={i}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {
                                columns.map(data =>
                                    <TableCell align="right">{row[data.accessor]}</TableCell>
                                )
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
export default TableComponent 