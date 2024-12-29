import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"



interface BursCardProps {
  title?: string;
  deadline?:string;
}

export default function HaberCard({ title,deadline }: BursCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Image
        src={LogoGsb}
        width={500}
        height={500}
        alt="gsb logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} {deadline}
        </Typography>
      </CardContent>

    </Card>
  );
}
