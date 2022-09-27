import { TransitionWrapper } from "@/theme/components/transition-wrapper";
import { Box, Slide, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ProjectsCard } from "./projects-card";
import { PROJECTS_LIST } from "./projects-constants";

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Jason Savelli</title>
      </Helmet>

      <Box maxWidth={1200} width="100%" mx="auto">
        <Slide in direction="right" timeout={{ enter: 1200 }}>
          <Typography
            mb={8}
            mt={4}
            variant="h1"
            textAlign="center"
            sx={(theme) => ({
              textDecoration: "underline",
              pb: 1,
              textDecorationColor: theme.palette.primary.main,
            })}
          >
            Projects
          </Typography>
        </Slide>

        <Box component="ul" sx={{ listStyle: "none" }} pl={0}>
          {PROJECTS_LIST.map((project, index) => {
            return (
              <TransitionWrapper component="li" key={project.websiteUrl}>
                <Slide in direction={index % 2 === 0 ? "left" : "right"} timeout={{ enter: 1200 }}>
                  {/* Intermediary component so that the slide animate this while we can have more transition on `<ProjectCard />` */}
                  <Box>
                    <ProjectsCard
                      {...project}
                      sx={{
                        mb: {
                          xs: 4,
                          lg: 10,
                        },
                      }}
                    />
                  </Box>
                </Slide>
              </TransitionWrapper>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
