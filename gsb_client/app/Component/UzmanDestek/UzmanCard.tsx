import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"
import Link from 'next/link';



interface UzmanCardProps {
  userName?: string
  userSurname?: string
  phone?: number
  gmail?: string
  roleName?:string
  
}

export default function UzmanCard({ roleName, userName,userSurname,phone,gmail }: UzmanCardProps) {
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
          {userName} {userSurname}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {roleName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href={`tel:${phone}`}>Telefon</Link></Button>
        <Button size="small"><Link href={`mailto:${gmail}`}>E-Posta</Link></Button>
      </CardActions>
    </Card>
  );
}
