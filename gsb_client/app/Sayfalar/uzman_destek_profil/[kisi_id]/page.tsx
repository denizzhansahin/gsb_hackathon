import { Box } from "@mui/material"
import UzmanAciklama from "@/app/Component/UzmanDestek/UzmanAciklama"
import UzmanOzet from "@/app/Component/UzmanDestek/UzmanOzet"
import Uzmanİletisim from "@/app/Component/UzmanDestek/Uzmanİletisim"
import HomeAI from "../../AI/HumaAI"




async function fetchCategoryContent(id: string) {
  try {
    const response = await fetch(
      `http://192.168.1.120:5000/api/Users/getById?id=${id}`
    );
    const data = await response.json();
    return data?.data || null;
  } catch (error) {
    console.error("Veri çekilirken bir hata oluştu:", error);
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ kisi_id: string }>
}) {
  const identityNo = (await params).kisi_id
  const categoryContent = await fetchCategoryContent(identityNo);

  

  if (!categoryContent) {
    return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
  }

  const tumBilgi = "Ad"+categoryContent.userName + "Soyad"+categoryContent.userSurname+"Rol"+categoryContent.roleName



  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
        
        <Box sx={{marginLeft:"20%",width:"100%"}}>
        <UzmanAciklama userName={categoryContent.userName} userSurname={categoryContent.userSurname} fullAddress={categoryContent.fullAddress}/>
        </Box>


        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"rows",marginTop:9}}>
          <UzmanOzet gmail={categoryContent.gmail} phone={categoryContent.phone}/>
          <Uzmanİletisim bilgi={"destek kod"}/>
          <HomeAI sayfa_bilgi={tumBilgi}/>
        </Box>
        
      </Box>
    </>
  )
}