import Card from "@mui/material/Card";

const CustomCard = ({ children, ...rest }) => {
  return <Card {...rest}>{children}</Card>;
};

export default CustomCard;
