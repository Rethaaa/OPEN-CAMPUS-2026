import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const IMAGES = [
  { id: 1, src: "/assets/brenana.png", alt: "Brenana" },
  { id: 2, src: "/assets/frenana.png", alt: "Frenana" },
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
    <>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Our Products!
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Tekan untuk melihat lebih besar.
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
                width: 500,
              }}
              onClick={() => handleClick(img)}
            >
              <Box
                component="img"
                src={img.src}
                alt={img.alt}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
              <Typography variant="body1" mt={1}>
                {img.alt}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Lightbox Dialog */}
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
              component="img"
              src={selectedImage.src}
              alt={selectedImage.alt}
              sx={{
                width: "100%",
                // maxHeight: "90vh",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
}
