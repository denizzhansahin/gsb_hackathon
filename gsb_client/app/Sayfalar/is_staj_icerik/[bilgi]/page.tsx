
import İsStajAciklama from "@/app/Component/İsStajİcerik/İsStajciklama"
import İsStajOzet from "@/app/Component/İsStajİcerik/İsStajOzet"
import İsStajSonTarih from "@/app/Component/İsStajİcerik/İsStajSonTarih"
import HomeAI from "../../AI/HumaAI"
import { Box } from "@mui/material"

async function fetchCategoryContent(id: string) {
  try {
    const response = await fetch(
      `http://192.168.1.120:5000/api/JobInternship/getById?id=${id}`
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

  const tumBilgi = "Şirket"+categoryContent.businessContent + "İçerik"+categoryContent.businessContent+"Başlık"+categoryContent.title

  if (!categoryContent) {
    return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{flex:2,width:200,display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column",marginTop:9}}>
          <İsStajOzet companyName={categoryContent.companyName} fullAddress={categoryContent.fullAddress}/>
          <br></br>
          <İsStajSonTarih deadline={categoryContent.deadline} firstline={categoryContent.firstline}/>
        </Box>
        <Box sx={{flex:5,width:1500}}>
        <İsStajAciklama title={categoryContent.title} businessContent={categoryContent.businessContent}/>
        <HomeAI sayfa_bilgi={tumBilgi}/>
        </Box>
        
      </Box>
    </>
  )
}