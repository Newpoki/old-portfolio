import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

type Props = BoxProps;

export const AboutLeftPart = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Box {...props} width={{ xs: "100%", md: "50%" }} mr={{ xs: 0, md: 2 }} ref={ref} />;
});
