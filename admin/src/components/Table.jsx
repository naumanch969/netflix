import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React from 'react'

const BasicTable = ({ attributes, headRow, data }) => {

    

    const createData = (attributes) => { return { ...attributes } }

    const getObjectValuesForSelectedKeys = (obj, keys) => {
        return Object.keys(obj)
            .filter(key => keys.includes(key))
            .map(key => obj[key]);
    }

    
    const lists = data.map(row => createData(row));


    return (
        <TableContainer>
            <Table sx={{ width: '100%', minWidth:'10rem' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            headRow.map((attribute, index) => (
                                <TableCell key={index} className='capitalize ' >{attribute}</TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>

                <TableBody>
                    {lists.map((list, index) => (
                        <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { blist: 0 } }} >
                            {
                                getObjectValuesForSelectedKeys(lists[index], attributes).map((value,index)=>(
                                <TableCell key={index} component="th" scope="row">
                                    {value}
                                </TableCell>
                                ))
                            }
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
