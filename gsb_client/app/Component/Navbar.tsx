"use client"

import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Image from 'next/image'

import LogoGsb from "../Gorseller/logo.png"


import Link from 'next/link'
import { Box } from "@mui/material";


export default function NavbarMenu() {
  return (
    <Navbar isBordered>







      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
          <Link href="/">
            <Box sx={{ flexDirection: "row", display: "flex" }}>
            <Image
              src={LogoGsb}
              width={90}
              height={90}
              alt="gsb logo"
            />
            <Box sx={{marginTop:2}}><p className="font-bold text-inherit"> Gençlik Bilgi Sistemi</p></Box>
            
            </Box>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Sayfalar/kategoriler">
            Bilgi Kategoriler
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="/Sayfalar/burslar">
            Burslar
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Sayfalar/is_staj">
            İş/Staj
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Sayfalar/gonulluluk">
            Gönüllülük
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/Sayfalar/uzman_kisiler">
            Uzman Kişilerden Destek Al
          </Link>
        </NavbarItem>


      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
