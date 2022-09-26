import { Box, Slide, Typography } from "@mui/material";
import { ProjectsCard } from "./projects-card";
import { PROJECTS_LIST } from "./projects-constants";

export const Projects = () => {
  return (
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
          const isLastCard = index === PROJECTS_LIST.length - 1;

          return (
            <Slide
              in
              key={project.websiteUrl}
              direction={index % 2 === 0 ? "left" : "right"}
              timeout={{ enter: 1200 }}
            >
              <Box component="li">
                <ProjectsCard
                  {...project}
                  sx={{
                    mb: {
                      xs: isLastCard ? 0 : 4,
                      lg: isLastCard ? 0 : 10,
                    },
                  }}
                />
              </Box>
            </Slide>
          );
        })}
      </Box>
    </Box>
  );
};
