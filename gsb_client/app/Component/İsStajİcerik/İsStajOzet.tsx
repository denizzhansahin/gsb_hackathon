"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

interface KategoriOzetProps {
  companyName?:string;
  fullAddress?:string;
}

export default function İsStajOzet({companyName,fullAddress}:KategoriOzetProps) {
  return (
    <>
    <Card sx={{ width: "80%",backgroundColor:"orange" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {companyName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br></br>
    <Card sx={{ width: "80%",backgroundColor:"green" }}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullAddress}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}
