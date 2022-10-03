import { TransitionWrapper } from "@/theme/components/transition-wrapper";
import { YellowSplashWrapper } from "@/theme/components/yellow-splash-wrapper";
import { Box, IconButton, Slide, styled, Tooltip, Typography } from "@mui/material";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SOCIAL_NETWORK_BUTTONS } from "./home-constants";
import { ReactComponent as YellowSplash } from "@/theme/assets/yellow-splash-with-photo.svg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [yellowSplashHeight, setYellowSplashHeight] = useState(0);
  const { t } = useTranslation("home");

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
        <title>{t("home:title")} - Jason Savelli</title>
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
          <TransitionWrapper py={0.1}>
            <Slide in timeout={{ enter: 1600 }} direction="left">
              <JobTitle color="primary" mb={2}>
                {t("home:job")}
              </JobTitle>
            </Slide>
          </TransitionWrapper>

          <TransitionWrapper>
            <Slide in timeout={{ enter: 1600 }} direction="right">
              <Typography mb={4} variant="h1">
                {t("home:main")}
              </Typography>
            </Slide>
          </TransitionWrapper>

          <TransitionWrapper>
            <Slide in timeout={{ enter: 1600 }} direction="left">
              <Typography mb={4}>{t("home:description")}</Typography>
            </Slide>
          </TransitionWrapper>
        </Box>

        <YellowSplashWrapper ref={ref}>
          <StyledYellowSplash />
        </YellowSplashWrapper>
      </Box>

      <Box flex="1" alignItems="center" justifyContent="center" display="flex" overflow="hidden">
        {SOCIAL_NETWORK_BUTTONS.map((socialNetwork, index) => {
          return (
            <Tooltip title={t(socialNetwork.tooltipTitle)} key={socialNetwork.href}>
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

export default Home;

const JobTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.custom.confortaa,
  fontSize: 20,
  textTransform: "uppercase",
  lineHeight: "28px",
  fontWeight: 700,
}));

const StyledYellowSplash = styled(YellowSplash)`
  width: 100%;
`;
