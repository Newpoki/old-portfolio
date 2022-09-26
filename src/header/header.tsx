import { AppBar, Box, styled, Tab, Tabs, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "revert",
        alignItems: "center",
        boxShadow: "none",
        backdropFilter: "blur(3px)",
        backgroundColor: "transparent",
      }}
    >
      <Name variant="body2">Jason Savelli</Name>

      <Box alignItems="center" display="flex" ml="auto">
        <Tabs value={pathname} aria-label="nav tabs example">
          {HEADER_LINKS.map((link) => {
            return (
              <Tab
                component={NavLink}
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
  );
};

const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.highEmphasis,
  fontFamily: theme.typography.custom.confortaa,
}));
