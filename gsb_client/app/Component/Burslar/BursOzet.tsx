"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriOzetProps {
  period?:string;
  whoCanApplyContent?:string;
}

export default function BursOzet({period,whoCanApplyContent}:KategoriOzetProps) {
  return (
    <>
    <Card sx={{ width: "80%",backgroundColor:"orange" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {period}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ width: "80%",backgroundColor:"green" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Koşullar
            {whoCanApplyContent}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
