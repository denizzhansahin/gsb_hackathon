"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

import Link from 'next/link';
import UzmanCard from './UzmanCard';

interface UzmanListeProps {
    kategori?:string,
}


interface Item {
    userName: string;
    userSurname: string;
    identityNo: string;
    phone: number;
    gmail: string;
    fullAddress: string;
    age: string;
    photo?:string;
    roleName?:string;
    id?:number
}

import { useEffect, useState } from "react";


export default function UzmanListe({kategori}:UzmanListeProps) {
        const [itemData, setItemData] = useState<Item[]>([]);
    
        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await fetch(
                        `http://192.168.1.120:5000/api/Users/getAllByRoleId?roleId=${kategori}`
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
        <Box sx={{ width: "90%", alignSelf:"self-start", alignContent:"center"}}>
            <Masonry columns={4} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <p>{item.identityNo}</p>
                        <Link href={`/Sayfalar/uzman_destek_profil/${item.id}`}>
                        <UzmanCard userName={item.userName} userSurname={item.userSurname} phone={item.phone} gmail={item.gmail} roleName={item.roleName}/>
                        </Link>
                    </div>
                ))}
            </Masonry>
        </Box>
    );
}
