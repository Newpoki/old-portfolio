import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

type Props = BoxProps;

export const AboutRightPart = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Box {...props} width={{ xs: "100%", md: "50%" }} ml={{ xs: 0, md: 2 }} ref={ref} />;
});
