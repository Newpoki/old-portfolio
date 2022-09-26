import { Box, BoxProps } from "@mui/material";

type Props = BoxProps;
/**
 * This is a simple wrapper to wrap every Transition component, such as Grow, Slide, Zoom or Fade from MUI.
 *
 * It only applies a hidden overflow. This is a workaround to avoid scrollbars that could appear on the body during the transition
 */
export const TransitionWrapper = (props: Props) => {
  return <Box {...props} style={{ overflow: "hidden " }} />;
};
