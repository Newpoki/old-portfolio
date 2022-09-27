import { Slide, SlideProps, Typography, TypographyProps } from "@mui/material";

type Props = TypographyProps & {
  timeout?: SlideProps["timeout"];
};

export const AboutParagraph = ({ timeout = { enter: 1200 }, ...props }: Props) => {
  return (
    <Slide in direction="right" timeout={timeout}>
      <Typography {...props} variant="body2" mb={2} />
    </Slide>
  );
};
