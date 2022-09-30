import { Box } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { APP_PX } from "./app-constants";
import { Header } from "../header/header";

const Home = lazy(() => import("../home/home"));
const Projects = lazy(() => import("../projects/projects"));
const Experiencies = lazy(() => import("../experiencies/experiencies"));
const About = lazy(() => import("../about/about"));

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />

      <Box px={APP_PX}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/projects"
            element={
              <Suspense fallback={null}>
                <Projects />
              </Suspense>
            }
          />

          <Route
            path="/experiencies"
            element={
              <Suspense fallback={null}>
                <Experiencies />
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense fallback={null}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </Box>
    </Box>
  );
};
