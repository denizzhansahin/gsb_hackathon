import BursAciklama from "@/app/Component/Burslar/BursAciklama"
import BursOzet from "@/app/Component/Burslar/BursOzet"
import BursSonTarih from "@/app/Component/Burslar/BursSonTarih"
import HomeAI from "../../AI/HumaAI"
import { Box } from "@mui/material"





async function fetchCategoryContent(id: string) {
  try {
    const response = await fetch(
      `http://192.168.1.120:5000/api/Grants/getById?id=${id}`
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
  params: Promise<{ bilgi: string }>
}) {
  const bilgi = (await params).bilgi
  const categoryContent = await fetchCategoryContent(bilgi);

  const tumBilgi = "Kimler Başvuru Yapabilir?"+categoryContent.whoCanApplyContent + "İçerik"+categoryContent.grantContent+"Başlık"+categoryContent.title

  if (!categoryContent) {
    return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{flex:2,width:200,display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",marginTop:9}}>
          <BursOzet period={categoryContent.period} whoCanApplyContent={categoryContent.whoCanApplyContent}/>
          <br></br>
          <BursSonTarih deadline={categoryContent.deadline} firstline={categoryContent.firstline}/>
        </Box>
        <Box sx={{flex:5,width:1500}}>
        <BursAciklama title={categoryContent.title} grantContent={categoryContent.grantContent}/>
        <HomeAI sayfa_bilgi={tumBilgi}/>
        </Box>
        
      </Box>
    </>
  )
}