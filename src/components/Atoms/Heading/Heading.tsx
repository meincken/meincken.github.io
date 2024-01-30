interface TextProps {
  props?: any;
}

export const Text = ({props}: TextProps) => {
  const { text, header } = props;

  let Tag: string;
  if (!header) Tag = "span";
  else Tag = `h${header}`;

  const ConstTag = Tag as "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  return <ConstTag>{text}</ConstTag>;
}
