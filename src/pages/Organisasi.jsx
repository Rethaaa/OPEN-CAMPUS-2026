import React from "react";
import { Container, Typography, Box, Grid, Paper, Avatar, List, ListItem, ListItemText } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const STEPS = [
    { title: "Langkah 1", sub: "Buka website dan pilih humaniora, bahasa asing, ekstrakurikuler, atau organisasi untuk melihat lebih detail.", img: "/assets/" },
    { title: "Langkah 2", sub: "Ikuti dan simak tur Open Campus 2026 di SMA Santa Ursula Jakarta.", img: "/assets/" },
    { title: "Langkah 3", sub: "Pilih humaniora dan bahasa asing yang paling menarik bagimu untuk 3 tahun.", img: "/assets/" },
];
const ACTS = [
    { title: "Humaniora", img: "/assets/humaniora.png", path: "/humaniora" },
    { title: "Bahasa Asing", img: "/assets/bahasa-asing.png", path: "/bahasa-asing" },
    { title: "Ekstrakurikuler", img: "/assets/ekstrakurikuler.png", path: "/ekstrakurikuler" },
    { title: "Organisasi", img: "/assets/organisasi.png", path: "/organisasi" },
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
