import React, { cloneElement } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

interface CustomButtonProps {
  color: string;
  icon?: JSX.Element;
  size?: "small" | "medium" | "large";
  title: string;
  disabled?: boolean;
  variant?: "text" | "outlined" | "contained";
  sx?: object;
  onClickButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    color,
    icon,
    size = "small",
    title,
    onClickButton,
    variant,
    disabled,
    ...rest
  } = props;

  const useStyles = makeStyles({
    root: {
      color: variant === "contained" ?  '#000' : color,
      backgroundColor: variant === "contained" ?  color : 'none',
      fontFamily: "IRANSans",
      "&:active": {
        boxShadow: "none",
        backgroundColor: variant === "contained" ?  color :'none',
      },
      "&:hover": {
        backgroundColor: variant === "contained" ? color : 'none',
        borderColor: variant !== "text" ? color : 'none',
        boxShadow: "none",
      },
    },
  });

  const classes = useStyles();

  const handleClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickButton && onClickButton(e);
  };

  return (
    <Button
      onClick={handleClickButton}
      variant="text"
      size={size}
      className={classes.root}
      startIcon={
        icon && cloneElement(icon, { sx: { margin: "0 -0.5rem 0 0.5rem" } })
      }
      {...rest}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
