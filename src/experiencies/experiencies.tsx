import { YellowSplashWrapper } from "@/theme/components/yellow-splash-wrapper";
import { Box, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { ReactComponent as YellowSplash } from "@/theme/assets/yellow-splash.svg";
import { PageMainTitle } from "@/theme/components/page-main-title";

const Experiencies = () => {
  return (
    <Box maxWidth={1200} mx="auto">
      <Helmet>
        <title>Experiences - Jason Savelli</title>
      </Helmet>

      <YellowSplashWrapper>
        <StyledYellowSplash />
      </YellowSplashWrapper>

      <Box zIndex={2} position="relative">
        <PageMainTitle>Experiencies</PageMainTitle>
      </Box>
    </Box>
  );
};

export default Experiencies;

const StyledYellowSplash = styled(YellowSplash)`
  width: 100%;
`;
