import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const STEPS = [
    { title: "Langkah 1", sub: "Buka website dan pilih humaniora, bahasa asing, ekstrakurikuler, atau organisasi untuk melihat lebih detail.", img: "/assets/1.png" },
    { title: "Langkah 2", sub: "Ikuti dan simak tur Open Campus 2026 di SMA Santa Ursula Jakarta.", img: "/assets/2.png" },
    { title: "Langkah 3", sub: "Pilih humaniora dan bahasa asing yang paling menarik bagimu untuk 3 tahun.", img: "/assets/3.png" },
];
const ACTS = [
    { title: "Humaniora", img: "/assets/humaniorahome.png", path: "/humaniora" },
    { title: "Bahasa Asing", img: "/assets/bahasahome.png", path: "/bahasa-asing" },
    { title: "Ekstrakurikuler", img: "/assets/ekskurhome.png", path: "/ekstrakurikuler" },
    { title: "Organisasi", img: "/assets/organisasihome.png", path: "/organisasi" },
];
const ORGS = [
    { title: "BP OSIS", img: "/assets/bp.png", path: "/organisasi/bp-osis" },
    { title: "SanurFM", img: "/assets/sfm.png", path: "/organisasi/sanurfm" },
    { title: "DK Pramuka", img: "/assets/dk.png", path: "/organisasi/dk-pramuka" },
    { title: "PSUMB", img: "/assets/psumb.png", path: "/organisasi/psumb" },
];

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ p: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
      {/* Header */}
      <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', width:'100vw', height:'70vh', fontFamily: 'Konthen' }}>
        <Box component="img" src="/assets/headershad.png" alt="Open Campus 2026" sx={{ width: {xs:'90%', sm:'80%', md:'65%', lg:'55%'} }} />
      </Box>


      {/* Panduan MPLS */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Mouldy Cheese" }}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ fontFamily: 'Konthen', display: 'flex', justifyContent: 'center'}}>
          <Box component="img" 
            src="/assets/home1.png" 
            alt="Panduan untuk Melihat Masa Depanmu" 
            style={{ display: 'block' }} 
            sx={{ 
              width: {
                xs: "90%",
                sm: "80vw",
                md: "65vw",
                lg: "55%"
              },
              height: 'auto',
              mx: 'auto',
            }} />
        </Typography>
        <Grid container spacing={4} sx={{ width: '80%', justifyContent:"center", display: "flex", alignItems: "center" }}>
          {STEPS.map((step) => (
            <Grid item xs={12} sm={6} md={4} key={step.title}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  textAlign: "center",
                  width: {
                    xs: "200px",
                    sm: "300px",
                    md: "300px",
                    lg: "300px"
                  }, 
                }}>
                <Box component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{ width: '100%', mx: "auto", mb: 2 }}
                />
                <Typography variant="h6" color='tertiary' sx={{ fontFamily: 'Konthen' }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {step.sub}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Kegiatan */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Mouldy Cheese" }}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ fontFamily: 'Konthen', display: 'flex', justifyContent: 'center'}}>
          <Box component="img" 
            src="/assets/home2.png" 
            alt="Tanam dan Lihat Masa Depanmu" 
            style={{ display: 'block' }} 
            sx={{ 
              width: {
                xs: "90%",
                sm: "80vw",
                md: "65vw",
                lg: "55%"
              },
              height: 'auto',
              mx: 'auto',
            }} />
        </Typography>
        <Grid container spacing={2} sx={{ width: "90%", justifyContent: "center" }}>
          {ACTS.map((act) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={act.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                component={RouterLink}
                to={act.path}
                sx={{
                  p: 2,
                  textAlign: "center",
                  cursor: "pointer",
                  width: {
                    xs: "200px",
                    sm: "300px",
                    md: "250px",
                    lg: "230px",
                  },
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  component="img"
                  src={act.img}
                  alt={act.title}
                  sx={{
                    width: "100%",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Organisasi */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Mouldy Cheese" }}>
        <Typography variant="h4" fontWeight={600} gutterBottom sx={{ fontFamily: 'Konthen', display: 'flex', justifyContent: 'center'}}>
          <Box component="img" 
            src="/assets/organisasi.png" 
            alt="Organisasi" 
            style={{ display: 'block' }} 
            sx={{ 
              width: {
                xs: "90%",
                sm: "80vw",
                md: "65vw",
                lg: "55%"
              },
              height: 'auto',
              mx: 'auto',
            }} />
        </Typography>
        <Grid container spacing={2} sx={{ width: "90%", justifyContent: "center" }}>
          {ORGS.map((org) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={org.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                component={RouterLink}
                to={org.path}
                sx={{
                  cursor: "pointer",
                  p: 3, 
                  textAlign: "center",
                  width: {
                    xs: "300px",
                    sm: "400px",
                    md: "250px",
                    lg: "175px"
                  }, 
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  component="img"
                  src={org.img}
                  alt={org.title}
                  sx={{
                    width: "100%",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, color: "tertiary.main", fontFamily: "Konthen", backgroundColor: "#ffffff77", textDecoration: "none", p: 0.5, borderRadius: 3 }}>
                  {org.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
