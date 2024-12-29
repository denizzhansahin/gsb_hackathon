"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import Link from 'next/link';
import BursCard from './BursCard';

import { useEffect, useState } from "react";


interface Item {
    deadline: string;
    id: number;
    firstline: string;
    grantContent: string | null;
    registerDate: string | null;
    period: string;
    title: string;
    stageArray: string;
    whoCanApplyContent: string;
  }
  

export default function BursListe() {

      const [itemData, setItemData] = useState<Item[]>([]);
    
      useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              `http://192.168.1.120:5000/api/Grants/getAll`
            );
            const data = await response.json();
            setItemData(data.data || []); 
          } catch (error) {
            console.error("Veri çekilirken bir hata oluştu:", error);
          }
        }
    
        fetchData();
      }, []);
    return (
        <Box sx={{ width: "90%", alignSelf:"self-start", alignContent:"center"}}>
            <Masonry columns={4} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        
                        <Link href={`/Sayfalar/burs_icerik/${item.id}`}>
                        <BursCard title={item.title} deadline={item.deadline} />
                        </Link>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}
