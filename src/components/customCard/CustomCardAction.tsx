import React from "react";
import CardActions from "@mui/material/CardActions";

const CustomCardAction: React.FC = ({ children, ...rest }) => {
  return <CardActions>{children}</CardActions>;
};

export default CustomCardAction;
