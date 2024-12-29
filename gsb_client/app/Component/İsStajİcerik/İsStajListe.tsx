"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Link from 'next/link';


import Image from 'next/image'

import LogoGsb from "../../Gorseller/logo.png"
import { Button, CardActions } from '@mui/material';

interface KategoriListeProps {
    kategori?: string
}


import { useEffect, useState } from "react";


interface Item {
    deadline: string;
    id: number;
    firstline: string;
    businessContent: string | null;
    companyName: string;
    title: string;
    fullAddress: string;
  }

export default function IsStajListe({ kategori }: KategoriListeProps) {
    const [itemData, setItemData] = useState<Item[]>([]);
        
          useEffect(() => {
            async function fetchData() {
              try {
                const response = await fetch(
                  `http://192.168.1.120:5000/api/JobInternship/getAll?id=${kategori}`
                );
                const data = await response.json();
                setItemData(data.data || []); 
              } catch (error) {
                console.error("Veri çekilirken bir hata oluştu:", error);
              }
            }
        
            fetchData();
          }, [kategori]);
    return (
        <Box sx={{ width: "90%", alignSelf: "self-start", alignContent: "center" }}>
            <Masonry columns={4} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <p>{kategori}</p>
                        <Link href={`/Sayfalar/is_staj_icerik/${item.id}`}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <Image
                                        src={LogoGsb}
                                        width={500}
                                        height={500}
                                        alt="gsb logo"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            {item.deadline}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Başvuru Yap</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}