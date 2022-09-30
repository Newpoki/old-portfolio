import { PageMainTitle } from "@/theme/components/page-main-title";
import { Box, Button, Link, Slide, styled, Typography, Zoom } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Me from "./me.jpg";
import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import { AboutParagraph } from "./about-paragraph";
import { AboutLeftPart } from "./about-left-part";
import { AboutRightPart } from "./about-right-part";
import { useRef } from "react";
import { ReactComponent as YellowSplash } from "@/theme/assets/yellow-splash.svg";
import { YellowSplashWrapper } from "@/theme/components/yellow-splash-wrapper";

const About = () => {
  const meParagraphRoot = useRef<HTMLDivElement>(null);
  const thisWebsiteParagraphRoot = useRef<HTMLDivElement>(null);

  return (
    <Box maxWidth={1200} mx="auto">
      <Helmet>
        <title>About - Jason Savelli</title>
      </Helmet>

      <YellowSplashWrapper>
        <StyledYellowSplash />
      </YellowSplashWrapper>

      {/* We want the whole continue to be display above the yellow splash */}
      <Box zIndex={2} position="relative">
        <PageMainTitle>About</PageMainTitle>

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
                Me
              </Typography>
            </Slide>

            <AboutParagraph timeout={{ enter: 1400 }}>
              I&apos;m Jason Savelli (He / Him). I was born on the 24th of December 1996, in
              Marignane, France. 25 years old, living in Décines Charpieu, near Lyon, France.
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>
              I was an O&apos;Clock student in 2019, where I deepened my love for the web ecosystem.
              Early in my journey in the web ecosystem, I&apos;ve found that I really love
              Javascript so I&apos;m giving 200% of myself in to get better and better everyday.
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1800 }}>
              I have 2 beautifull doggos that I love more than anything, playing guitar, video
              games.
            </AboutParagraph>
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
                This website
              </Typography>
            </Slide>

            <AboutParagraph timeout={{ enter: 1400 }}>
              <Typography component="span" variant="body2">
                The design is <b>strongly</b> inspired by this&nbsp;
              </Typography>
              <Link href="https://www.figma.com/community/file/946944225031473055">Figma</Link> on
              the community place. It&apos;s made with a<i>little bit</i> overkilled stack,
              using&nbsp;
              <Link href="https://fr.reactjs.org/" target="_blank">
                React
              </Link>
              ,&nbsp;
              <Link href="https://mui.com" target="_blank">
                Material UI
              </Link>
              &nbsp;with&nbsp;
              <Link href="https://www.typescriptlang.org/" target="_blank">
                Typescript
              </Link>
              &nbsp;and&nbsp;
              <Link href="https://vitejs.dev/" target="_blank">
                Vite
              </Link>
              .
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>
              The picture on the home page has been taken by <b>Andrey Vyrodov</b>, and you can have
              a look at his&nbsp;
              <Link href="https://www.instagram.com/runningwithcameraphoto/">Instagram</Link>.
            </AboutParagraph>

            <AboutParagraph timeout={{ enter: 1600 }}>
              This is not supposed to be the best website in the world, only a little portfolio
              where I can share what I&apos;ve done, and some infos about me.
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
              Hey, lead me to the GitHub
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
