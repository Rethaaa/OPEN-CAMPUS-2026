import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { id: 1, src: "/assets/jerman.png", alt: "Bahasa Jerman", vid: "https://drive.google.com/file/d/11N0opmqbgcMRfh7zmqxadjbJlF8ceWJS/preview" },
  { id: 2, src: "/assets/prancis.png", alt: "Bahasa Prancis", vid: "https://drive.google.com/file/d/17WGq2RGSlrilTcAVhg8NbXosWFnHBOLq/preview" },
  { id: 3, src: "/assets/mandarin.png", alt: "Bahasa Mandarin", vid: "https://drive.google.com/file/d/1GGnQa4UAts5-mFDdWHz98LL69EquWVe0/preview" },
  { id: 4, src: "/assets/jepang.png", alt: "Bahasa Jepang", vid: "https://drive.google.com/file/d/1ofa59OTQCC8gOZCxzJRxSs13GVmlhITK/preview" },
  { id: 5, src: "/assets/korea.png", alt: "Bahasa Korea", vid: "https://drive.google.com/file/d/1y4fIHVGcFWiV1AmrdrI40FquziIn_q1p/preview" },
  { id: 6, src: "/assets/belanda.png", alt: "Bahasa Belanda", vid: "https://drive.google.com/file/d/1xeYXtFjEWfUnaeuT-OQzeLu8yNsasg4Q/preview" },
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
          src="/assets/bahasa-asing.png" 
          alt="Bahasa Asing"
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
