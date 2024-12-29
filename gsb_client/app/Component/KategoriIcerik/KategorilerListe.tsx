"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Link from "next/link";
import Image from "next/image";
import LogoGsb from "../../Gorseller/logo.png";
import { useEffect, useState } from "react";

interface KategoriListeProps {
  kategori?: string;
}

interface Item {
  categoryName: string;
  id: number;
  pageContent: string;
  photo: string | null;
  registerDate: string | null;
  secondTitle: string;
  title: string;
  userName: string;
  userSurname: string;
}

export default function KategorilerListe({ kategori }: KategoriListeProps) {
  const [itemData, setItemData] = useState<Item[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://192.168.1.120:5000/api/CategoriesContents/getAllByCategoryId?categoryId=${kategori}`
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
    <Box
      sx={{
        width: "90%",
        alignSelf: "self-start",
        alignContent: "center",
      }}
    >
      <Masonry columns={4} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <p>{kategori}</p>
            <Link href={`/Sayfalar/kategori_icerik/${item.id}`}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <Image
                    src={item.photo || LogoGsb}
                    width={500}
                    height={500}
                    alt={item.title || "Resim"}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.pageContent.slice(0, 100)}...
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item.userName} {item.userSurname}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </div>
        ))}
      </Masonry>
    </Box>
  );
}
