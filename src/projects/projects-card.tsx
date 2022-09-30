import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import { lighten, SystemStyleObject } from "@mui/system";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  websiteUrl: string;
  githubUrl: string;
  sx: SystemStyleObject;
};

export const ProjectsCard = ({ title, description, websiteUrl, githubUrl, imgUrl, sx }: Props) => {
  return (
    <Paper
      sx={(theme) => ({
        ...sx,
        transitionProperty: "box-shadow, background-color",
        transitionDuration: `${theme.transitions.duration.short}ms`,
        boxShadow: theme.shadows[3],
        borderRadius: "24px",
        // Otherwise, the picture isn't croped properly
        overflow: "hidden",
        mx: 1,

        "&:hover": {
          boxShadow: theme.shadows[6],
          bgcolor:
            theme.palette.mode === "dark"
              ? theme.palette.custom.lowEmphasis
              : lighten(theme.palette.primary.main, 0.9),
        },
      })}
    >
      <Box
        display="flex"
        alignItems="center"
        height={524}
        flexDirection={{
          xs: "column-reverse",
          lg: "row",
        }}
      >
        <Stack width={{ xs: "100%", lg: "50%" }} p={{ xs: 3, lg: 6 }}>
          <Typography variant="h3" mb={4}>
            {title}
          </Typography>

          <Typography variant="body2" mb={4}>
            {description}
          </Typography>

          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
              href={websiteUrl}
              target="_blank"
            >
              View project
            </Button>

            <Button
              startIcon={<GitHubIcon />}
              variant="outlined"
              color="secondary"
              href={githubUrl}
              target="_blank"
            >
              View source
            </Button>
          </Box>
        </Stack>

        <Stack width={{ xs: "100%", lg: "50%" }} height="100%">
          <img src={imgUrl} style={{ objectFit: "cover", height: "100%" }} loading="lazy" />
        </Stack>
      </Box>
    </Paper>
  );
};
