"use client"
import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import AdsListe from './Component/Anasayfa/Ads';

const HomePage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" color="primary">
          Gençlik Bilgilendirme Sistemi
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Gençliğin geleceğine ışık tutan bir platform.
        </Typography>
      </Box>

      <Box mb={6}>
        <AdsListe/>
        <Typography variant="h4" gutterBottom>
          Hakkında
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Hedefimiz</Typography>
            <Typography>
              Gençlerin bilgiye hızlı ve doğru şekilde ulaşmasını sağlamak.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Vizyonumuz</Typography>
            <Typography>
              Teknoloji ile desteklenen global bir bilgi ağı oluşturmak.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Misyonumuz</Typography>
            <Typography>
              Gençlerin eğitim, kariyer ve sosyal hayatta başarılı olmalarına
              katkı sağlamak.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          Başarı Hikayeleri
        </Typography>
        <Box display="flex" overflow="auto" pb={2}>
          {['Ali', 'Ayşe', 'Mehmet', 'Elif'].map((name, index) => (
            <Box
              key={index}
              p={2}
              m={1}
              border="1px solid #ddd"
              borderRadius="8px"
              minWidth="200px"
              textAlign="center"
              bgcolor="background.paper"
            >
              <Typography variant="h6" color="primary">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Gençlik Bilgilendirme Sistemi sayesinde hayallerine ulaştı.
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box mb={6}>
        <Typography variant="h4" gutterBottom>
          İstatistiklerle Gençlik
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="primary" fontWeight="bold">
              %75
            </Typography>
            <Typography>Gençlerin bilgiye erişimde yaşadığı sorunlar.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="primary" fontWeight="bold">
              %90
            </Typography>
            <Typography>
              Gençlerin doğru bilgiye eriştiğinde başarı oranındaki artış.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" color="primary" fontWeight="bold">
              50+ Ülke
            </Typography>
            <Typography>
              Dünya genelinde gençlik bilgilendirme sistemine olan ihtiyaç.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
