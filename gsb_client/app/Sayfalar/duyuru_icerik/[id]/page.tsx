import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


async function fetchCategoryContent(id: string) {
    try {
        const response = await fetch(
            `http://192.168.1.120:5000/api/Advertisements/getById?id=${id}`
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
    params: Promise<{ id: string }>
}) {
    const id = (await params).id

    const categoryContent = await fetchCategoryContent(id);

    if (!categoryContent) {
        return <p>İçerik yüklenirken bir hata oluştu veya içerik bulunamadı.</p>;
    }
    return (
        <Container sx={{ marginTop: 4 }}>
            <Card sx={{ maxWidth: 800, margin: '0 auto', boxShadow: 3 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={categoryContent.photo} // Görsel yolunu buraya ekleyin
                    title="Haber Görseli"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                        {categoryContent.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                        Tarih: {categoryContent.date}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {categoryContent.advertisementContent}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" variant="contained" color="primary">
                        Destek Al
                    </Button>
                    <Button size="large" variant="outlined" color="secondary">
                        AI ile Destek Al 
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}
