"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import Link from 'next/link';
import UzmanCard from './GonullulukCard';

interface GonullulukListeProps {
    kategori?: string,
}


interface Item {
    id: number;
    title: string;
    volunteeringContent: string;
    conditions: string | null;
    firstDate: string;
    endDate: string;
    period: string;
    type?:string;
}

import { useEffect, useState } from "react";

export default function GonullulukListe({ kategori }: GonullulukListeProps) {
    const [itemData, setItemData] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `http://192.168.1.120:5000/api/Volunteering/getAll?id=${kategori}`
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
                        <Link href={`/Sayfalar/gonulluluk_icerik/${item.id}`}>
                            <UzmanCard kategori={kategori} title={item.title}/>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}

