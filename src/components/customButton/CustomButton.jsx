import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = (props) => {
  const {
    color,
    icon: Icon,
    size = "small",
    title,
    onClickButton,
    ...rest
  } = props;

  const StyledButton = styled(Button)({
    color,
    backgroundColor: props?.variant === "contained" && color,
    fontFamily: "IRANSans",
    "&:active": {
      boxShadow: "none",
      backgroundColor: props?.variant === "contained" && color,
    },
    "&:hover": {
      backgroundColor: props?.variant === "contained" && color,
      borderColor: props?.variant !== "text" && color,
      boxShadow: "none",
    },
  });

  const handleClickButton = (e) => {
    onClickButton && onClickButton(e);
  };

  return (
    <StyledButton
      onClick={handleClickButton}
      variant="text"
      size={size}
      startIcon={Icon && <Icon sx={{ margin: "0 -0.5rem 0 0.5rem" }} />}
      {...rest}
    >
      {title}
    </StyledButton>
  );
};

export default CustomButton;
