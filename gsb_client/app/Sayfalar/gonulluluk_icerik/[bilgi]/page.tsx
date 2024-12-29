
import GonullulukAciklama from "@/app/Component/Gonulluluk/GonullulukAjciklama"
import GonullulukOzet from "@/app/Component/Gonulluluk/GonullulukOzet"
import GonullulukSonTarih from "@/app/Component/Gonulluluk/GonullulukTarih"
import HomeAI from "../../AI/HumaAI"
import { Box } from "@mui/material"


async function fetchCategoryContent(id: string) {
  try {
    const response = await fetch(
      `http://192.168.1.120:5000/api/Volunteering/getById?id=${id}`
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

  const tumBilgi = "Şirket"+categoryContent.conditions + "İçerik"+categoryContent.volunteeringContent+"Başlık"+categoryContent.title

  if (!categoryContent) {
    return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{flex:2,width:200,display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",marginTop:9}}>
          <GonullulukOzet conditions={categoryContent.conditions} period={categoryContent.period}/>
          <br></br>
          <GonullulukSonTarih firstDate={categoryContent.firstDate} endDate={categoryContent.endDate}/>
        </Box>
        <Box sx={{flex:5,width:800}}>
        <GonullulukAciklama title={categoryContent.title} volunteeringContent={categoryContent.volunteeringContent}/>
        <HomeAI sayfa_bilgi={tumBilgi}/>
        </Box>
        
      </Box>
    </>
  )
}