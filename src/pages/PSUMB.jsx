import React, { useState } from "react";
import { Grid, Paper, Typography, Box, Dialog, IconButton } from "@mui/material";

export default function Attachments() {
    return (
    <>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 4 }}>
            <Typography variant="h4" fontWeight={600} gutterBottom sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Box component="img" 
                    src="/assets/psumb.png" 
                    alt="PSUMB"
                    sx={{ maxHeight: "200px", objectFit: "contain", color:'tertiary.main',fontFamily: 'Konthen', width: {xs: "300px", sm: "400px", md: "250px", lg: "175px"}, }} 
                />
                <Box component="img" 
                    src="/assets/psumbh.png" 
                    alt="PSUMB"
                    sx={{ maxHeight: "200px", objectFit: "contain", color:'tertiary.main',fontFamily: 'Konthen', width: {xs: "90%", sm: "80vw", md: "65vw", lg: '55vw'}, }} 
                />
            </Typography>
            <Box
                component="iframe"
                src='https://drive.google.com/file/d/1wrqnxZcqrLlcpclRqvN-sj0QWtK29ELX/preview'
                allow="autoplay; encrypted-media"
                controls
                autoPlay
                muted
                playsInline
                alt='PSUMB'
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
        </Box>
    </>
  );
}
