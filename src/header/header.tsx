import { AppBar, Box, IconButton, styled, Tab, Tabs, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useCallback, useState } from "react";
import { HeaderDrawer } from "./header-drawer";

export const Header = () => {
  const { pathname } = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "revert",
          alignItems: "center",
          boxShadow: "none",
          backdropFilter: "blur(3px)",
          backgroundColor: "transparent",
          minHeight: theme.mixins.toolbar,
        })}
      >
        <IconButton color="primary" sx={{ display: { md: "none" } }} onClick={handleOpenDrawer}>
          <MenuIcon sx={{ color: "custom.highEmphasis" }} />
        </IconButton>

        <Name variant="body2" ml={{ xs: "auto", md: 0 }}>
          Jason Savelli
        </Name>

        <Box alignItems="center" display={{ xs: "none", md: "flex" }} ml="auto">
          <Tabs value={pathname} aria-label="nav tabs example" indicatorColor="secondary">
            {HEADER_LINKS.map((link) => {
              return (
                <Tab
                  component={NavLink}
                  icon={<link.icon />}
                  iconPosition="start"
                  key={link.href}
                  label={
                    <Typography variant="body2" color="inherit">
                      {link.label}
                    </Typography>
                  }
                  to={link.href}
                  value={link.href}
                />
              );
            })}
          </Tabs>
        </Box>
      </AppBar>

      <HeaderDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} onOpen={handleOpenDrawer} />
    </>
  );
};

const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.highEmphasis,
  fontFamily: theme.typography.custom.confortaa,
}));
