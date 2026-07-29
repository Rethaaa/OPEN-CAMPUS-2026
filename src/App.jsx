import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./components/Theme";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Humaniora from "./pages/Humaniora";
import Bahasa from "./pages/BahasaAsing";
import Ekskur from "./pages/Ekstrakurikuler";
import BP from "./pages/BP";
import DK from "./pages/DK";
import PSUMB from "./pages/PSUMB";
import SFM from "./pages/SFM";
import Organisasi from "./pages/Organisasi";
import { Container, Box, ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router sx={{ fontFamily: 'Mouldy Cheese' }}>
        <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#f9fafb" sx={{ width: "100vw", marginTop: 8 }}>
        <Navigation />
        <Container sx={{ flex: 1, py: 4, width: "100%", maxWidth: "lg", px: { xs: 2, sm: 3, md: 4 } }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/humaniora" element={<Humaniora />} />
            <Route path="/bahasa-asing" element={<Bahasa />} />
            <Route path="/ekstrakurikuler" element={<Ekskur />} />
            <Route path="/organisasi/bp-osis" element={<BP />} />
            <Route path="/organisasi/sanurfm" element={<SFM />} />
            <Route path="/organisasi/dk-pramuka" element={<DK />} />
            <Route path="/organisasi/psumb" element={<PSUMB />} />
            <Route path="/organisasi" element={<Organisasi />} />
          </Routes>
        </Container>
        <Footer sx={{ width: "100%", maxWidth: "lg", px: { xs: 2, sm: 3, md: 4 } }} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}