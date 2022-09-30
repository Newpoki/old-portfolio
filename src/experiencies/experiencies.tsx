import { YellowSplashWrapper } from "@/theme/components/yellow-splash-wrapper";
import { Box, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ReactComponent as YellowSplash } from "@/theme/assets/yellow-splash.svg";
import { PageMainTitle } from "@/theme/components/page-main-title";
import { ExperienciesTimeline } from "./experiencies-timeline";

const Experiencies = () => {
  return (
    <Box maxWidth={1500} mx="auto">
      <Helmet>
        <title>Experiences - Jason Savelli</title>
      </Helmet>

      <YellowSplashWrapper>
        <StyledYellowSplash />
      </YellowSplashWrapper>

      <Box zIndex={2} position="relative">
        <PageMainTitle>Experiencies</PageMainTitle>
      </Box>

      <ExperienciesTimeline />
    </Box>
  );
};

export default Experiencies;

const StyledYellowSplash = styled(YellowSplash)`
  width: 100%;
`;
