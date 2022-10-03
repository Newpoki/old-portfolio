import { PageMainTitle } from "@/theme/components/page-main-title";
import { Box, Button, Slide, styled, Typography, Zoom } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Me from "./me.jpg";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { AboutParagraph } from "./about-paragraph";
import { AboutLeftPart } from "./about-left-part";
import { AboutRightPart } from "./about-right-part";
import { useRef } from "react";
import { ReactComponent as YellowSplash } from "@/theme/assets/yellow-splash.svg";
import { YellowSplashWrapper } from "@/theme/components/yellow-splash-wrapper";
import { useTranslation } from "react-i18next";
import { Markdown } from "@/theme/components/markdown";

const About = () => {
  const { t } = useTranslation("about");
  const meParagraphRoot = useRef<HTMLDivElement>(null);
  const thisWebsiteParagraphRoot = useRef<HTMLDivElement>(null);

  return (
    <Box maxWidth={1200} mx="auto">
      <Helmet>
        <title>{t("about:title")} - Jason Savelli</title>
      </Helmet>

      <YellowSplashWrapper>
        <StyledYellowSplash />
      </YellowSplashWrapper>

      {/* We want the whole continue to be display above the yellow splash */}
      <Box zIndex={2} position="relative">
        <PageMainTitle>{t("about:title")}</PageMainTitle>

        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          mb={4}
          flexDirection={{ xs: "column-reverse", md: "row" }}
        >
          <AboutLeftPart ref={meParagraphRoot} overflow="hidden">
            <Slide
              direction="left"
              in
              container={meParagraphRoot.current}
              timeout={{ enter: 1200 }}
            >
              <Typography variant="h3" mb={3}>
                {t("about:me.title")}
              </Typography>
            </Slide>

            <AboutParagraph timeout={{ enter: 1400 }}>
              {t("about:me.age-and-localization")}
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>{t("about:me.studies")}</AboutParagraph>

            <AboutParagraph timeout={{ enter: 1800 }}>{t("about:me.other")}</AboutParagraph>
          </AboutLeftPart>

          <Zoom in timeout={{ enter: 800 }}>
            <AboutRightPart borderRadius="50%" overflow="hidden">
              <Box
                // So that the div doesnt take more height than the img it contains
                display="flex"
              >
                <img src={Me} width="100%" />
              </Box>
            </AboutRightPart>
          </Zoom>
        </Box>

        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          mb={4}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <AboutLeftPart ref={thisWebsiteParagraphRoot} overflow="hidden">
            <Slide
              direction="left"
              in
              container={thisWebsiteParagraphRoot.current}
              timeout={{ enter: 1200 }}
            >
              <Typography variant="h3" mb={3}>
                {t("about:website.title")}
              </Typography>
            </Slide>

            <AboutParagraph timeout={{ enter: 1400 }}>
              <Markdown>{t("about:website.inspiration-and-stack")}</Markdown>
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>
              <Markdown>{t("about:website.picture")}</Markdown>
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>
              {t("about:website.disclaimer")}
            </AboutParagraph>
          </AboutLeftPart>

          <AboutRightPart justifyContent={{ md: "center" }} display="flex">
            <Button
              variant="contained"
              color="primary"
              endIcon={<OpenInNewIcon />}
              href="https://github.com/Newpoki/final-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("about:website.github-button")}
            </Button>
          </AboutRightPart>
        </Box>
      </Box>
    </Box>
  );
};

export default About;

const StyledYellowSplash = styled(YellowSplash)`
  width: 100%;
`;
