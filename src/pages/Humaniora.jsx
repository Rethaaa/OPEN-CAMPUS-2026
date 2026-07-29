import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { id: 1, src: "/assets/gamelanb.png", alt: "Gamelan Bali", vid: "https://drive.google.com/file/d/1OFnoZvbkaGvEQ2_fvXID0Mw5nuC7svDb/preview" },
  { id: 2, src: "/assets/gamelanj.png", alt: "Gamelan Jawa", vid: "https://drive.google.com/file/d/1F03F-pgxm-km1H-bJfHx-A5oJY6n158W/preview" },
  { id: 3, src: "/assets/kecantikan.PNG", alt: "Kecantikan", vid: "https://drive.google.com/file/d/1wVAIlCbTdtynvJ7AW2E-e57y2Ft51udV/preview" },
  { id: 4, src: "/assets/angklung.PNG", alt: "Angklung", vid: "https://drive.google.com/file/d/11ytI7hoFyAzHtyZXYMt-tBl0sRZL-kCY/preview" },
  { id: 5, src: "/assets/kolintang.PNG", alt: "Kolintang", vid: "https://drive.google.com/file/d/1xz3-8p2i_9StZPqzG5AzxrkmjnTUGG9X/preview" },
  { id: 6, src: "/assets/melukis.PNG", alt: "Melukis", vid: "https://drive.google.com/file/d/1zTEOE2vUumqHd1YFp5Cb0fzy5Cu402DK/preview" },
  { id: 7, src: "/assets/memasak.PNG", alt: "Memasak", vid: "https://drive.google.com/file/d/1HqH4xGA1QIHzLiUBCaAkAHi5_JpvP5Bp/preview" },
  { id: 8, src: "/assets/fotografi.png", alt: "Fotografi", vid: "https://drive.google.com/file/d/1h4eo1hkEwe0l0bptQVcGSyFKefBbENpj/preview" },
  { id: 9, src: "/assets/sinem.png", alt: "Sinematografi", vid: "https://drive.google.com/file/d/1CBlIIaPn85ANjWlohSUY_X5C92P_KYE5/preview" },
  { id: 10, src: "/assets/ttm.png", alt: "TTM", vid: "" },
  { id: 11, src: "/assets/handicraft.png", alt: "Handicraft", vid: "https://drive.google.com/file/d/1nxJFFT9UklQfpt8QvbmRrV_eCqxyTy0v/preview" },
  { id: 12, src: "/assets/graphicd.png", alt: "Desain Grafis", vid: "https://drive.google.com/file/d/1K2q4Dx2U1Ttw9eJYk6Wj21p_y_tKgbQr/preview" },
  { id: 13, src: "/assets/tatting.png", alt: "Tatting", vid: "https://drive.google.com/file/d/1C-TTLvkjo6qQUhj5-ZsXq8AE5x2BIXwQ/preview" },
  { id: 14, src: "/assets/fd.png", alt: "Fashion Design", vid: "https://drive.google.com/file/d/1wdqLnnbH9s0rk79gBmmu8A8zWuEiAHNm/preview" },
  { id: 15, src: "/assets/padus.png", alt: "Paduan Suara", vid: "https://drive.google.com/file/d/19VI-F3RGMBq37mTyFUfi9bYcmxVwMMet/preview" },
];

export default function Attachments() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box component="img" 
          src="/assets/humaniora.png" 
          alt="Humaniora"
          sx={{ maxHeight: "200px", objectFit: "contain", color:'tertiary.main', fontFamily: 'Konthen', width: {xs: "90%", sm: "80vw", md: "65vw", lg: '55vw'}, }} 
        />
      </Typography>

      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {IMAGES.map((img) => (
          <Grid item xs={12} sm={6} md={4} key={img.id}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                width: {
                  xs: "300px",
                  sm: "400px",
                  md: "300px",
                  lg: "300px"
                },
                height: '100%',
                backgroundColor: "#ffffff77",
              }}
              onClick={() => handleClick(img)}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontFamily: 'Konthen', color: 'tertiary.main' }}>
                {img.alt}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: { backgroundColor: "transparent", boxShadow: "none" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "fixed",
              top: 50,
              right: 70,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box
              component="iframe"
              src={selectedImage.vid}
              allow="autoplay; encrypted-media"
              controls
              autoPlay
              muted
              playsInline
              alt={selectedImage.alt}
              sx={{
                width: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
                maxHeight: "89vh",
                display: "block",
                margin: "0 auto",
                overflowY: "hidden",
              }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
