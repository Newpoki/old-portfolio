import { Box, styled, Tab, Tabs, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { HEADER_LINKS } from "./header-constants";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box
      alignItems="center"
      component="nav"
      justifyContent="space-between"
      display="flex" // Increasing zIndex to be displayed over the yellow splash
      zIndex={2}
    >
      <Name variant="body2">Jason Savelli</Name>

      <Box alignItems="center" display="flex">
        <Tabs value={pathname} aria-label="nav tabs example">
          {HEADER_LINKS.map((link) => {
            return (
              <Tab
                component={NavLink}
                disabled={link.disabled}
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
    </Box>
  );
};

const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.highEmphasis,
  fontFamily: theme.typography.custom.confortaa,
}));
