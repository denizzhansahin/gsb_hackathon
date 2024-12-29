"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriİletisimProps {
  deadline?:string;
  firstline?:string;
}

export default function İsStajSonTarih({ deadline,firstline }: KategoriİletisimProps) {
  return (
    <>
      <Card sx={{ width: "80%", backgroundColor: "red" }}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstline}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br></br>

      <Card sx={{ width: "80%", backgroundColor: "red" }}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {deadline}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
