import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Aktif from "../components/Aktif";
import Inaktif from "../components/Inaktif";

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
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
      <Typography variant="h4" fontWeight={600} gutterBottom sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box component="img" 
          src="/assets/ekstrakurikuler.png" 
          alt="Ekstrakurikuler"
          sx={{ maxHeight: "200px", objectFit: "contain", color:'tertiary.main',fontFamily: 'Konthen', width: {xs: "90%", sm: "80vw", md: "65vw", lg: '55vw'}, }} 
        />
      </Typography>
      <Aktif />
      <Inaktif />
    </Box>
  );
}
