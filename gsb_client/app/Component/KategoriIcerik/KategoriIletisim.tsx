"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriİletisimProps {
    bilgi?:string;
  }

export default function KategoriIletisim({bilgi}:KategoriİletisimProps) {
  return (
    <Card sx={{ width: "80%", backgroundColor:"red" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {bilgi}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
