import { NavLink } from "@/theme/components/navlink";
import { Box, Button, SwipeableDrawer, Tab, Tabs, tabsClasses, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { useCallback } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "@/settings/settings-atom";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const HeaderDrawer = ({ isOpen, onOpen, onClose }: Props) => {
  const [, setSettings] = useAtom(settingsAtom);
  const { pathname } = useLocation();
  const { t } = useTranslation("header");

  const handleOpenSettings = useCallback(() => {
    setSettings((value) => ({ ...value, isOpen: true }));
  }, [setSettings]);

  return (
    <SwipeableDrawer open={isOpen} onOpen={onOpen} onClose={onClose} PaperProps={{ sx: { pt: 3 } }}>
      <Tabs
        value={pathname}
        aria-label="nav tabs example"
        orientation="vertical"
        indicatorColor="primary"
        sx={{
          [`& .${tabsClasses.indicator}`]: {
            width: 4,
          },
        }}
      >
        {HEADER_LINKS.map((link) => {
          return (
            <Tab
              icon={<link.icon />}
              component={NavLink}
              key={link.href}
              label={<Typography color="inherit">{t(link.label)}</Typography>}
              to={link.href}
              onClick={onClose}
              value={link.href}
            />
          );
        })}
      </Tabs>

      <Box mt="auto" p={2}>
        <Button
          size="large"
          sx={{ color: "custom.mediumEmphasis" }}
          startIcon={<SettingsIcon />}
          onClick={handleOpenSettings}
        >
          {t("header:settings")}
        </Button>
      </Box>
    </SwipeableDrawer>
  );
};
