import BursListe from '@/app/Component/Burslar/BursListe'
import { Box } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Box
    component="main"
    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
>

    <BursListe/>
    
</Box>
  )
}

export default page