import {
  WorkOutline as WorkOutlineIcon,
  ChildFriendlyOutlined as ChildFriendlyOutlinedIcon,
  CardMembership as CardMembershipIcon,
} from "@mui/icons-material";
import { Experience } from "./experiences-types";

type Props = {
  type: Experience["type"];
};

export const ExperienciesTimelineIcon = ({ type }: Props) => {
  switch (type) {
    case "work":
      return <WorkOutlineIcon sx={{ color: "custom.highEmphasis" }} />;
    case "birth":
      return <ChildFriendlyOutlinedIcon sx={{ color: "custom.highEmphasis" }} />;
    case "diploma":
      return <CardMembershipIcon sx={{ color: "custom.highEmphasis" }} />;
  }
};
