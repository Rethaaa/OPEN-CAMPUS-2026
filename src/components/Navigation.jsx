import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink } from "react-router-dom";

export default function ResponsiveAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Humaniora", path: "/humaniora" },
    { label: "Bahasa Asing", path: "/bahasa-asing" },
    { label: "Ekstrakurikuler", path: "/ekstrakurikuler" },
  ];

  const organisasiItems = [
    { label: "BP OSIS", path: "/organisasi/bp-osis" },
    { label: "SanurFM", path: "/organisasi/sanurfm" },
    { label: "DK Pramuka", path: "/organisasi/dk-pramuka" },
    { label: "PSUMB", path: "/organisasi/psumb" },
  ];

  const drawerContent = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 250,
        pt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="primary"
        sx={{
          textAlign: "center",
          mb: 2,
          display: "flex",
          alignItems: "center",
          fontFamily: "Konthen",
        }}
      >
        <img
          src="/assets/logo.png"
          alt=""
          style={{ width: 40, marginRight: 8 }}
        />
        Open Campus 2026
      </Typography>

      <List sx={{ width: "100%" }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem>
          <ListItemText
            primary="Organisasi"
            primaryTypographyProps={{ fontWeight: "bold" }}
          />
        </ListItem>

        {organisasiItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ pl: 2 }}>
            <ListItemButton component={RouterLink} to={item.path}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={1}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: { xs: 2, sm: 5 },
          }}
        >
          <img
            src="/assets/logo.png"
            alt="Open Campus 2026"
            style={{ width: 40 }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  textTransform: "none",
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleMenuOpen}
              sx={{
                textTransform: "none",
              }}
            >
              Organisasi
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {organisasiItems.map((item) => (
                <MenuItem
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  onClick={handleMenuClose}
                  sx={{
                    textTransform: "none",
                    color: "tertiary.main",
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Stack>

          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
            backgroundColor: "side.main",
            color: "quaternary.main",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}