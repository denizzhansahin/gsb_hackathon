"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"


interface KategoriAciklamaProps {
  bilgi?: string;
  baslik?:string
}


export default function KategoriAciklama({ bilgi, baslik }: KategoriAciklamaProps) {
  return (
    <Card sx={{ width: "80%" }}>
      <CardActionArea>

          

        <CardContent>
          <Image
            src={LogoGsb}
            width={500}
            height={500}
            alt="gsb logo"
          />
          <Typography gutterBottom variant="h5" component="div">
            {baslik}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {bilgi}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
