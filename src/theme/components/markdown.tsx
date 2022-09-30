import { Link } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

const COMPONENTS_MAPPING: ReactMarkdownOptions["components"] = {
  a: (props) => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

type Props = ReactMarkdownOptions;

export const Markdown = (props: Props) => {
  return <ReactMarkdown {...props} components={COMPONENTS_MAPPING} />;
};
