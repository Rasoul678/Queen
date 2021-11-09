import CardActions from "@mui/material/CardActions";

const CustomCardAction = ({ children, ...rest }) => {
  return <CardActions>{children}</CardActions>;
};

export default CustomCardAction;
