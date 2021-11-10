import React from "react";
import CardContent from "@mui/material/CardContent";

interface CustomCardContentProps {
  sx?: object;
}

const CustomCardContent: React.FC<CustomCardContentProps> = ({
  children,
  ...rest
}) => {
  return <CardContent {...rest}>{children}</CardContent>;
};

export default CustomCardContent;
