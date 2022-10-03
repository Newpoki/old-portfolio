import { AppBar, Box, Button, IconButton, styled, Tab, Tabs, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";
import { Menu as MenuIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { useCallback, useState } from "react";
import { HeaderDrawer } from "./header-drawer";
import { NavLink } from "@/theme/components/navlink";
import { APP_PX } from "@/app/app-constants";
import { useAtom } from "jotai";
import { settingsAtom } from "@/settings/settings-atom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [, setSettings] = useAtom(settingsAtom);

  const { t } = useTranslation("header");
  const { pathname } = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleOpenSettings = useCallback(() => {
    setSettings((value) => ({ ...value, isOpen: true }));
  }, [setSettings]);

  return (
    <>
      <AppBar
        position="sticky"
        component="nav"
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "none",
          backdropFilter: "blur(3px)",
          backgroundColor: "transparent",
          minHeight: theme.mixins.toolbar,
          px: APP_PX,
        })}
      >
        <IconButton color="primary" sx={{ display: { md: "none" } }} onClick={handleOpenDrawer}>
          <MenuIcon sx={{ color: "custom.highEmphasis" }} />
        </IconButton>

        <Name variant="body2" ml={{ xs: "auto", md: 0 }}>
          Jason Savelli
        </Name>

        <Box display={{ xs: "none", md: "initial" }}>
          <Tabs value={pathname} indicatorColor="secondary">
            {HEADER_LINKS.map((link) => {
              return (
                <Tab
                  component={NavLink}
                  icon={<link.icon sx={{ color: "custom.mediumEmphasis" }} />}
                  iconPosition="start"
                  key={link.href}
                  label={
                    <Typography variant="body2" color="custom.mediumEmphasis">
                      {t(link.label)}
                    </Typography>
                  }
                  to={link.href}
                  value={link.href}
                />
              );
            })}
          </Tabs>
        </Box>

        <Box display={{ xs: "none", md: "initial" }}>
          <Button
            size="large"
            sx={{ color: "custom.mediumEmphasis" }}
            startIcon={<SettingsIcon />}
            onClick={handleOpenSettings}
          >
            {t("header:settings")}
          </Button>
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
