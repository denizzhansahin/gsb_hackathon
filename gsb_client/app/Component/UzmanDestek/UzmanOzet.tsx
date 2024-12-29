"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button, Link } from '@mui/material';

interface UzmanOzetProps {
  gmail?:string;
  phone?:string;
}

export default function UzmanOzet({gmail,phone}:UzmanOzetProps) {
  return (
    
    <Card sx={{ width: 600,backgroundColor:"orange" , flexDirection:"column", direction:"flex"}}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Button size="small"><Link href={`mailto:${gmail}`}>E-Posta</Link></Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Button size="small"><Link href={`tel:${phone}`}>Telefon</Link></Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
  );
}
