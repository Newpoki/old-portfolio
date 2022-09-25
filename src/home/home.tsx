import { Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { SOCIAL_NETWORK_BUTTONS } from "./home-constants";
import { ReactComponent as YellowSplash } from "./yellow-splash.svg";

export const Home = () => {
  return (
    <>
      <Box display="flex">
        <Box mt={8} maxWidth="33%">
          <JobTitle color="primary" mb={2}>
            Web Developper
          </JobTitle>

          <Typography mb={4} variant="h1">
            Hello, my name is Jason Savelli
          </Typography>

          <Typography mb={4}>
            I&apos;m a Front End developper, and I enjoy working on React and TS projects.
          </Typography>
        </Box>

        <Box display="flex" position="absolute" right={0} top={0}>
          <StyledYellowSplash />
        </Box>
      </Box>

      <Box flex="1" alignItems="center" justifyContent="center" display="flex">
        {SOCIAL_NETWORK_BUTTONS.map((socialNetwork) => {
          return (
            <Tooltip key={socialNetwork.href} title={socialNetwork.tooltipTitle}>
              <IconButton
                sx={{ mx: 2, color: socialNetwork.color }}
                href={socialNetwork.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <socialNetwork.Icon sx={{ fontSize: 80 }} />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>
    </>
  );
};

const JobTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.custom.confortaa,
  fontSize: 20,
  textTransform: "uppercase",
  lineHeight: "27px",
  fontWeight: 700,
}));

const StyledYellowSplash = styled(YellowSplash)`
  width: 720px;
  height: 629px;
`;
