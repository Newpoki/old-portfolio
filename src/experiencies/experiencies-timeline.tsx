import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Grow, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";
import { EXPERIENCES } from "./experiences-constants";
import { ExperienciesTimelineIcon } from "./experiencies-timeline-icon";
import { TransitionWrapper } from "@/theme/components/transition-wrapper";
import { Markdown } from "@/theme/components/markdown";

export const ExperienciesTimeline = () => {
  const theme = useTheme();
  const isLgOrUpper = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Timeline
      position={isLgOrUpper ? "alternate" : "right"}
      sx={{
        p: 0,

        // Disable before element on mobile because timeline is on position right
        [`& .${timelineItemClasses.root}:before`]: isLgOrUpper
          ? undefined
          : {
              flex: 0,
              padding: 0,
            },
      }}
    >
      {EXPERIENCES.map((experience, index) => {
        const isOdd = index % 2 === 0;

        return (
          <TimelineItem key={experience.title}>
            <Grow in timeout={{ enter: 600 }}>
              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: "custom.highEmphasis" }} />
                <TimelineDot
                  sx={{
                    backgroundColor:
                      theme.palette.mode === "dark" ? "custom.mediumEmphasis" : "primary.main",
                    boxShadow: theme.shadows["12"],
                  }}
                >
                  <ExperienciesTimelineIcon type={experience.type} />
                </TimelineDot>
                <TimelineConnector sx={{ backgroundColor: "custom.highEmphasis" }} />
              </TimelineSeparator>
            </Grow>

            <TimelineContent>
              <TransitionWrapper
                // Adding padding otherwise the internal overflow hidden hides the box shadow
                p={1}
              >
                <Slide in timeout={{ enter: 1200 }} direction={isOdd ? "right" : "left"}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "background.paper",
                      boxShadow: theme.shadows["6"],
                      borderRadius: theme.shape.borderRadius,
                      textAlign: "left",
                      mb: 3,
                    }}
                  >
                    <Typography component="h3" mb={3} variant="h4">
                      {experience.title}
                    </Typography>

                    <Typography variant="body2">
                      <Markdown>{experience.content}</Markdown>
                    </Typography>
                  </Box>
                </Slide>
              </TransitionWrapper>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
