import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import { Home } from "./home/home";

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" px={15}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
};
