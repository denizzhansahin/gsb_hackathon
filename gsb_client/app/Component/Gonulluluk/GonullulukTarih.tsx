"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriİletisimProps {
  firstDate?: string;
  endDate?:string;
}

export default function GonullulukSonTarih({ firstDate,endDate }: KategoriİletisimProps) {
  return (
    <>
      <Card sx={{ width: "80%", backgroundColor: "red" }}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {firstDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <br></br>

      <Card sx={{ width: "80%", backgroundColor: "red" }}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {endDate}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
