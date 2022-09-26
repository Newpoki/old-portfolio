import { TransitionWrapper } from "@/theme/components/transition-wrapper";
import { Box, Fade, IconButton, Slide, styled, Tooltip, Typography } from "@mui/material";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SOCIAL_NETWORK_BUTTONS } from "./home-constants";
import { ReactComponent as YellowSplash } from "./yellow-splash.svg";

export const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [yellowSplashHeight, setYellowSplashHeight] = useState(0);

  const handleUpdateYellowSplashHeight = useCallback(() => {
    if (ref.current) {
      const { clientHeight } = ref.current;

      setYellowSplashHeight(clientHeight);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleUpdateYellowSplashHeight);

    if (!yellowSplashHeight) {
      handleUpdateYellowSplashHeight();
    }

    return () => {
      window.removeEventListener("resize", handleUpdateYellowSplashHeight);
    };
  }, [handleUpdateYellowSplashHeight, yellowSplashHeight]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Box display="flex" flexDirection={{ xs: "column-reverse" }}>
        <Box
          mt={{
            // Only want the content below splash on small screen
            // Removing 16px from the height because picture is taller than what is really displayed
            xs: yellowSplashHeight ? (yellowSplashHeight - 16) / 8 : 8,
            md: 8,
          }}
          maxWidth={{ md: "50%" }}
          // So that it goes on top of the yellow splash
          zIndex={2}
        >
          <TransitionWrapper>
            <Slide in timeout={{ enter: 1600 }} direction="left">
              <JobTitle color="primary" mb={2}>
                Web Developper
              </JobTitle>
            </Slide>
          </TransitionWrapper>

          <TransitionWrapper>
            <Slide in timeout={{ enter: 1600 }} direction="right">
              <Typography mb={4} variant="h1">
                Hello, my name is Jason Savelli
              </Typography>
            </Slide>
          </TransitionWrapper>

          <TransitionWrapper>
            <Slide in timeout={{ enter: 1600 }} direction="left">
              <Typography mb={4}>
                I&apos;m a Front End developper, and I enjoy working on React and TS projects.
              </Typography>
            </Slide>
          </TransitionWrapper>
        </Box>

        <TransitionWrapper>
          <Fade in timeout={{ enter: 2500 }}>
            <Box
              display="flex"
              position="absolute"
              right={0}
              top={0}
              //  We don't want the picture to cause vertical scroll
              maxHeight="100vh"
              width={{
                xs: "100%",
                md: 720,
                lg: 1000,
              }}
              ref={ref}
            >
              <StyledYellowSplash />
            </Box>
          </Fade>
        </TransitionWrapper>
      </Box>

      <Box flex="1" alignItems="center" justifyContent="center" display="flex" overflow="hidden">
        {SOCIAL_NETWORK_BUTTONS.map((socialNetwork, index) => {
          return (
            <Tooltip title={socialNetwork.tooltipTitle} key={socialNetwork.href}>
              <Slide in timeout={{ enter: (index + 1) * 300 }} direction="up">
                <IconButton
                  sx={{ mx: { xs: 0.5, md: 2 }, color: socialNetwork.color }}
                  href={socialNetwork.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <socialNetwork.Icon sx={{ fontSize: { xs: 40, md: 80 } }} />
                </IconButton>
              </Slide>
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
  width: 100%;
`;
