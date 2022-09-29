import { Box, BoxProps, Fade } from "@mui/material";
import { forwardRef } from "react";
import { TransitionWrapper } from "./transition-wrapper";

type Props = BoxProps;

export const YellowSplashWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <TransitionWrapper>
      <Fade in timeout={{ enter: 2500 }}>
        <Box
          {...props}
          ref={ref}
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
        />
      </Fade>
    </TransitionWrapper>
  );
});
