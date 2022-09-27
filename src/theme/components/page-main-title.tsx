import { Slide, Typography } from "@mui/material";
import { ReactNode } from "react";
import { TransitionWrapper } from "./transition-wrapper";

type Props = {
  children: ReactNode;
};

export const PageMainTitle = ({ children }: Props) => {
  return (
    <TransitionWrapper>
      <Slide in direction="right" timeout={{ enter: 1200 }}>
        <Typography
          mb={{ xs: 4, md: 8 }}
          mt={4}
          variant="h1"
          textAlign="center"
          sx={(theme) => ({
            textDecoration: "underline",
            pb: 1,
            textDecorationColor: theme.palette.primary.main,
          })}
        >
          {children}
        </Typography>
      </Slide>
    </TransitionWrapper>
  );
};
