import CardContent from "@mui/material/CardContent";

const CustomCardContent = ({ children, ...rest }) => {
  return <CardContent {...rest}>{children}</CardContent>;
};

export default CustomCardContent;
