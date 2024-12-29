"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Dashboard } from '@mui/icons-material';
import { Typography } from '@mui/material';
import UzmanListe from '@/app/Component/UzmanDestek/UzmanListe';




export default function UzmanKisiler() {
    const [activeMenu, setActiveMenu] = useState<string>("1");


    const menuItems = [
        { label: "Mentor(Girişim/Proje)", content: "Mentor", icon: <Dashboard /> },
        { label: "Psikolog", content: "Psikolog", icon: <Dashboard /> },
        { label: "Eğitmen", content: "Eğitmen", icon: <Dashboard /> },
        { label: "Akademik Danışman", content: "Akademik Danışman", icon: <Dashboard /> },
        { label: "Spor Danışmanı", content: "Spor Danışmanı", icon: <Dashboard /> },
        { label: "Diyetisyen", content: "Diyetisyen", icon: <Dashboard /> },
        { label: "Kariyer Danışmanı", content: "Kariyer Danışmanı", icon: <Dashboard /> },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "Mentor":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='1' /></div>;
            case "Psikolog":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='2' /></div>;
            case "Eğitmen":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='3' /></div>;
            case "Akademik Danışman":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='4' /></div>;
            case "Spor Danışmanı":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='5' /></div>;
            case "Diyetisyen":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='6' /></div>;
            case "Kariyer Danışmanı":
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='7' /></div>;
            default:
                return <div>Seçilen içerik: {activeMenu} <UzmanListe kategori='1' /></div>;
        }
    };
    return (
        <>
            <Box sx={{ flexDirection: "row", display: "flex" }}>
                <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', flex: 2 }}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {menuItems.map((item) => (
                                <ListItem key={item.label} disablePadding sx={{ display: "block" }}>
                                    <ListItemButton
                                        onClick={() => {
                                            setActiveMenu(item.content);

                                        }}
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: "initial",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon

                                            sx={{
                                                minWidth: 0,
                                                mr: 3,
                                                justifyContent: "center",
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        {<ListItemText primary={item.label} />}
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                    <Divider />
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        p: 3,
                        width: { sm: `calc(100%px)`, flex: 10 },

                    }}
                >

                    <Typography variant="h5" gutterBottom>
                        {activeMenu}
                    </Typography>
                    {renderContent()}
                </Box>
            </Box>
        </>
    );
}
