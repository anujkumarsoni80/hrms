import React from 'react'
import styles from './ViewScreenTable.module.scss'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

export interface IHeadingType {
    label: string;
}
export interface ITableDataType {
    ProductId: number;
    name: string;
    sell: number;
    return: number;
    stock: number;
}

interface IdataType {
    tableHeading: { id: number; label: string; }[];
    tableData: { id: number; ProductId: string; name: string; sell: number; return: number; stock: number; }[];
}

export interface IViewScreenTable {
    data: IdataType;
}
const ViewScreenTable = ({ data }: IViewScreenTable) => {
    return (
        <TableContainer className={styles.viewScreenTableContainer}>
            <Table>
                <TableHead>
                    <TableRow>
                        {data.tableHeading.map((item: IHeadingType) => {
                            return (
                                <TableCell sx={{ backgroundColor: "#F8F9F9" }}>{item.label}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.tableData.map((item: any) => {
                        return (
                            <TableRow>
                                <TableCell>{item.ProductId}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.sell}</TableCell>
                                <TableCell>{item.return}</TableCell>
                                <TableCell>{item.stock}</TableCell>
                            </TableRow>
                        )
                    })}

                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ViewScreenTable