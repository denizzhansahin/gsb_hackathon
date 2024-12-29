"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface UzmanOzetProps {
  bilgi?:string;
}

export default function Uzmanİletisim({bilgi}:UzmanOzetProps) {
  return (
    
    <Card sx={{ width: 300,backgroundColor:"orange" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Destek Talebi Oluştur
            <p>{bilgi}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
  );
}
