import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box component="nav" justifyContent="space-between" display="flex" pt={1.5}>
      <Typography>Jason Savelli</Typography>

      <Box alignItems="center" display="flex">
        <Typography mr={6}>Home</Typography>
        <Typography mr={6}>Projects</Typography>
        <Typography>Contacts</Typography>
      </Box>
    </Box>
  );
};
