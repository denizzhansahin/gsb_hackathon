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
import GonullulukListe from '@/app/Component/Gonulluluk/GonullulukListe';





export default function Gonulluluk() {
    const [activeMenu, setActiveMenu] = useState<string>("7");


    const menuItems = [
        { label: "Acil Durum ve Afet Gönüllülüğü", content: "7", icon: <Dashboard /> },
        { label: "Toplum Yararına Gönüllülük", content: "8", icon: <Dashboard /> },
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "7":
                return <div><GonullulukListe kategori='7'/></div>;
            case "8":
                return <div>Seçilen içerik: {activeMenu} <GonullulukListe kategori='8'/></div>;
            default:
                return <div>Seçilen içerik: {activeMenu} <GonullulukListe kategori='7'/></div>;
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
