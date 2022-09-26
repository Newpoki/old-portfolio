import { theme } from "@/theme/theme";

import {
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  PhoneIphone as PhoneIphoneIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

export const SOCIAL_NETWORK_BUTTONS = [
  {
    Icon: LinkedInIcon,
    // LinkedIn logo color
    color: "#0072b1",
    tooltipTitle: "Go to LinkedIn",
    href: "https://www.linkedin.com/in/jason-savelli/",
  },
  {
    Icon: TwitterIcon,
    // Twitter logo color
    color: "#00acee",
    tooltipTitle: "Go to Twitter",
    href: "https://twitter.com/home",
  },
  {
    Icon: GitHubIcon,
    // Github logo color
    color: "#171515",
    tooltipTitle: "Go to Github",
    href: "https://github.com/Newpoki",
  },
  {
    Icon: PhoneIphoneIcon,
    color: theme.palette.custom.highEmphasis,
    tooltipTitle: "Call me",
    href: "tel:+33659416819",
  },
  {
    Icon: EmailIcon,
    // Outlook logo color
    color: "#00a2ed",
    tooltipTitle: "E-mail me",
    href: "mailto:savellijason@gmail.com",
  },
];
