"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import KategorilerListe from "@/app/Component/KategoriIcerik/KategorilerListe";

function Kategoriler() {
    const [value, setValue] = useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList onChange={handleChange} centered>
                        <Tab label="Psikoloji" value="1" />
                        <Tab label="Sağlık" value="2" />
                        <Tab label="Eğitim" value="3" />
                        <Tab label="Spor" value="4" />
                        <Tab label="Kariyer" value="5" />
                        <Tab label="Girişimcilik" value="6" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <KategorilerListe kategori={"1"} />
                    </Box>
                </TabPanel>
                <TabPanel value="2"><Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KategorilerListe kategori={"2"} />
                </Box>
                </TabPanel>
                <TabPanel value="3"><Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KategorilerListe kategori={"3"} />
                </Box>
                </TabPanel>
                <TabPanel value="4"><Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KategorilerListe kategori={"4"} />
                </Box>
                </TabPanel>
                <TabPanel value="5"><Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KategorilerListe kategori={"5"} />
                </Box>
                </TabPanel>
                <TabPanel value="6"><Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <KategorilerListe kategori={"6"} />
                </Box>
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default Kategoriler;
