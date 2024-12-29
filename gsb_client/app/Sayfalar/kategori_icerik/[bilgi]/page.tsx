import KategoriOzet from "@/app/Component/KategoriIcerik/KategoriOzet";
import KategoriIletisim from "@/app/Component/KategoriIcerik/KategoriIletisim";
import { Box } from "@mui/material";
import KategoriAciklama from "@/app/Component/KategoriIcerik/KategoriAciklama";
import HomeAI from "../../AI/HumaAI"

async function fetchCategoryContent(id: string) {
  try {
    const response = await fetch(
      `http://192.168.1.120:5000/api/CategoriesContents/getById?id=${id}`
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

  const tumBilgi = "Kategori"+categoryContent.categoryName + "İçerik"+categoryContent.pageContent+"Başlık"+categoryContent.title

  if (!categoryContent) {
    return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 2,
            width: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 9,
          }}
        >
          {/* Doğru alanları bileşenlere geçiriyoruz */}
          <KategoriOzet kategori={categoryContent.categoryName} bilgi={categoryContent.registerDate} />
          <br />
          <KategoriIletisim bilgi={`${categoryContent.userName} ${categoryContent.userSurname}`} />
        </Box>
        <Box sx={{ flex: 5, width: 1500 }}>
          {/* Açıklama için ilgili alan gönderiliyor */}
          <KategoriAciklama bilgi={categoryContent.pageContent} baslik={categoryContent.title}/>
          <HomeAI sayfa_bilgi={tumBilgi}/>
        </Box>
       
      </Box>
    </>
  );
}
