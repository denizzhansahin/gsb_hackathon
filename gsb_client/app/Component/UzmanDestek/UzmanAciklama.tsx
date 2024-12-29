"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"


interface UzmanAciklamaProps {
  userName?: string;
  userSurname?:string;
  fullAddress?:string
}


export default function UzmanAciklama({ userName,userSurname,fullAddress }: UzmanAciklamaProps) {
  return (
    <Card sx={{ width: "80%"}}>
      <CardActionArea>

          

        <CardContent sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"rows" }}>
          <Image
            src={LogoGsb}
            width={500}
            height={500}
            alt="gsb logo"
          />
          <Typography gutterBottom variant="h5" component="div">
            {userName} {userSurname}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {fullAddress}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
