import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { id: 1, src: "/assets/taekwondo.png", alt: "Taekwondo", vid: "" },
  { id: 2, src: "/assets/jersif.png", alt: "Jerman Intensif", vid: "" },
  { id: 3, src: "/assets/kir.png", alt: "KIR", vid: "" },
  { id: 4, src: "/assets/englishd.png", alt: "English Debate", vid: "https://drive.google.com/file/d/1Lc-0JVZznoqbBFeDvQFNse3-XZEd0jQq/preview" },
  { id: 5, src: "/assets/band.png", alt: "Band", vid: "" },
  { id: 6, src: "/assets/orkes.png", alt: "Orkestra", vid: "https://drive.google.com/file/d/1HShRqC_GfKm5M-RSWzWnVGefoNjZpt3k/preview" },
  { id: 7, src: "/assets/bultang.png", alt: "Bulu Tangkis", vid: "https://drive.google.com/file/d/1oLKms7avppqthe8Y6Sx0QCZ-Udgj93-F/preview" },
  { id: 8, src: "/assets/mathc.png", alt: "Math Club", vid: "https://drive.google.com/file/d/1V7k9XKETia1FRR33BGjf_7lPwFjM4c8F/preview" },
  { id: 9, src: "/assets/ucv.png", alt: "UCV", vid: "https://drive.google.com/file/d/1utjjbGjpP-O6irksQ_HHaO90r3jtG-RR/preview" },
  { id: 10, src: "/assets/voli.png", alt: "Voli", vid: "https://drive.google.com/file/d/1MaApMzVCZehKbM-4rxuLnNTi3nuvuS9w/preview" },
  { id: 11, src: "/assets/panahan.png", alt: "Panahan", vid: "" },
  { id: 12, src: "/assets/futsal.png", alt: "Futsal", vid: "https://drive.google.com/file/d/1v-V6Hn4VtV1XGfa970jOSPd7PqDYTWLT/preview" },
]

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
    <>
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
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
    </>
  );
}
