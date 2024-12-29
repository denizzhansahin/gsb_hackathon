"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriOzetProps {
  bilgi?:string;
  kategori?:string
}

export default function KategoriOzet({bilgi,kategori}:KategoriOzetProps) {
  return (
    <>
    <Card sx={{ width: "80%",backgroundColor:"orange" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {kategori}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ width: "80%",backgroundColor:"orange" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {bilgi}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
