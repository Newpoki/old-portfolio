import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Header } from "./header/header";
import { Home } from "./home/home";
import { Projects } from "./projects/projects";

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" px={{ xs: 3, md: 15 }}>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  );
};
