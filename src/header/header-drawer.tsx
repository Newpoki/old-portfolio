import { SwipeableDrawer, Tab, Tabs, tabsClasses, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const HeaderDrawer = ({ isOpen, onOpen, onClose }: Props) => {
  const { pathname } = useLocation();

  return (
    <SwipeableDrawer
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      PaperProps={{ sx: { justifyContent: "center" } }}
    >
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
              label={<Typography color="inherit">{link.label}</Typography>}
              to={link.href}
              value={link.href}
            />
          );
        })}
      </Tabs>
    </SwipeableDrawer>
  );
};
