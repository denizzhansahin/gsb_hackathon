'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import Link from 'next/link';

import { useEffect, useState } from "react";
import HaberCard from './duyuruCard';

interface Item {
  advertisementContent: string;
  date: string;
  id: number;
  photo: string;
  title: string;
}

export default function AdsListe() {
  const [itemData, setItemData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://192.168.1.120:5000/api/Advertisements/getAll`
        );
        const data = await response.json();
        setItemData(data.data || []); // Update according to your API response structure
      } catch (error) {
        console.error("Veri çekilirken bir hata oluştu:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box sx={{ width: "90%", alignSelf: "self-start", alignContent: "center" }}>
      <Masonry columns={4} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Link href={`/Sayfalar/duyuru_icerik/${item.id}`}>
              <HaberCard
                title={item.title}
                deadline={item.date} // Assuming `date` is the deadline
                // You can display other fields from the API like `advertisementContent` or `photo` if needed
              />
            </Link>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
