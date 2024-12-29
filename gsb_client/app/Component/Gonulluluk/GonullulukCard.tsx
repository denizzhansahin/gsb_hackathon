import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"



interface GonullulukCardProps {
  kategori?: string
  title?: string
}

export default function UzmanCard({ kategori , title}: GonullulukCardProps) {
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
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {kategori}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Başvuru Yap</Button>
      </CardActions>
    </Card>
  );
}
