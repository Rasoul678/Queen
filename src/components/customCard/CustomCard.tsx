import React from "react";
import Card from "@mui/material/Card";

interface CustomCardProps {
  sx?: any;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>;
};

export default CustomCard;
