import { Card, CardActionArea, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Subc = () => {
    let [data, setData] = useState([])
    let [lang, setLang] = useState([])

    let set = [...new Set(lang)]

    let a = 1
    const getApi = async () => {
        try {
            const res = await axios.post("https://edubinplatform-a01d5146e549.herokuapp.com/submissions/get", {
                questionId: 2,
                queryId: 0,
                userId: 8
            })
            console.log(res.data.data);
            setData(res.data.data)
            res.data.data.map((e) => {
                setLang([...lang, e.language])
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'auto auto', gap: "20px" }}>
            <Card sx={{ maxWidth: "100%" }}>

                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        Submissions
                    </Typography>
                    <TableContainer sx={{ textAlign: 'center' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Status</TableCell>
                                    <TableCell align="center">Language</TableCell>
                                    <TableCell align="center">Runtime</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((e) => {
                                    return (
                                        <TableRow key={a++}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {e.status}
                                            </TableCell>
                                            <TableCell align="center">{e.language}</TableCell>
                                            <TableCell align="center">{e.runtime}</TableCell>
                                        </TableRow>
                                    )
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>

            </Card>
            <Card sx={{ maxWidth: "100%%" }}>
                <CardActionArea>
                    <CardContent>
                        <TableHead>
                            <TableRow>
                                <TableCell>Axror_Emo</TableCell> 
                            </TableRow>
                            <TableRow>
                                <TableCell>{set}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((d) => {
                                return (
                                    <TableRow key={a++}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {d.console}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Subc