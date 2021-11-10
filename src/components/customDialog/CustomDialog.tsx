import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "../customButton/CustomButton";

interface CustomDialogProps {
  isOpen: boolean;
  confirmValue: string;
  headerTitle: string;
  message: string;
  acceptTitle: string;
  cancelTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
  onClose: () => void;
}

const CustomDialog: React.FC<CustomDialogProps> = (props) => {
  const {
    isOpen,
    confirmValue,
    headerTitle,
    message,
    acceptTitle,
    cancelTitle,
    onConfirm,
    onCancel,
    onClose,
  } = props;

  const [inputValue, setInputValue] = useState("");

  const isConfirmed = confirmValue === inputValue.trim();

  useEffect(() => {
    if (!isOpen) {
      setInputValue("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ direction: "rtl" }}>
      <DialogTitle
        sx={{ fontFamily: "IRANSans", bgcolor: "#333", color: "#fff" }}
      >
        {headerTitle}
      </DialogTitle>
      <DialogContent sx={{ bgcolor: "#333", color: "#fff" }}>
        <DialogContentText sx={{ fontFamily: "IRANSans", color: "#fff" }}>
          {message}
        </DialogContentText>
        <TextField
          margin="dense"
          id="verification"
          type="text"
          fullWidth
          variant="outlined"
          size="small"
          value={inputValue}
          inputProps={{
            placeholder: `${confirmValue}`,
            style: {
              color: "#fff",
              fontFamily: "IRANSans",
            },
          }}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </DialogContent>
      <DialogActions
        sx={{ fontFamily: "IRANSans", bgcolor: "#333", color: "#fff" }}
      >
        <CustomButton
          title={cancelTitle}
          color="orange"
          onClickButton={onCancel}
        />
        <CustomButton
          title={acceptTitle}
          color="crimson"
          onClickButton={onConfirm}
          disabled={!isConfirmed}
        />
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
