import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormHelperText,
  NativeSelect,
  TextField,
} from "@mui/material";
import { getIcon, socialTypes, types } from "./utils";
import * as Styled from "./ItemManipulation.styles";
import useActions from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import CustomButton from "../../../../components/customButton/CustomButton";

type FormType = "type" | "username" | "link";

interface ErrorState {
  form: FormType | null;
  message: string;
}

const Form: React.FC = () => {
  const { setManipulationMode, addNewItem, setManipulationItem, editItem } =
    useActions();

  const { item, mode } = useTypedSelector((state) => state.manipulation);
  const { items } = useTypedSelector((state) => state.items);

  const [error, setError] = useState<ErrorState>({ form: null, message: "" });

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowError(true);
  }, [error]);

  type EventType = React.ChangeEvent<
    HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
  >;

  const handleChangeField = (e: EventType) => {
    setShowError(false);

    setManipulationItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelManipulation = () => {
    setManipulationMode(null);
    setManipulationItem({ type: null, username: "", link: "" });
  };

  const handleError = () => {
    const usernameAlreadyExists = items.find(
      (i) =>
        i.username === item.username &&
        item.username &&
        item.id !== i.id &&
        item.type === i.type
    );

    const linkAlreadyExists = items.find(
      (i) =>
        i.link === item.link &&
        item.link &&
        item.id !== i.id &&
        item.type === i.type
    );

    if (!item.type) {
      setError({ form: "type", message: "نوع مدیا الزامیست" });
      return { hasError: true };
    }

    if (usernameAlreadyExists) {
      setError({ form: "username", message: "این آیدی موجود است" });
      return { hasError: true };
    }

    if (linkAlreadyExists) {
      setError({ form: "link", message: "این آدرس موجود است" });
      return { hasError: true };
    }

    return { hasError: false };
  };

  const handleSaveItem = () => {
    if (handleError().hasError) return;

    addNewItem(item);
    setManipulationMode(mode);
    setManipulationItem({ type: null, username: "", link: "" });
    setError({ form: null, message: "" });
  };

  const handleEditItem = () => {
    if (handleError().hasError) {
      return;
    }

    editItem(item);
    handleCancelManipulation();
  };

  const renderError = (message: string) => (
    <FormHelperText
      style={{
        fontFamily: "IRANSans",
        textAlign: "right",
        color: "red",
        position: "absolute",
        top: "2rem",
      }}
      id="component-error-text"
    >
      {message}
    </FormHelperText>
  );

  return (
    <>
      <Styled.FormWrapper>
        <FormControl fullWidth>
          <NativeSelect
            error={
              item?.type ? error.form === "type" && !item?.type : undefined
            }
            value={item?.type ?? ""}
            onChange={handleChangeField}
            IconComponent={getIcon(item?.type || "")}
            inputProps={{
              name: "type",
              id: "type",
              style: {
                fontFamily: "IRANSans",
                color: "#fff",
              },
            }}
          >
            <Styled.SelectOption value={""}>نوع*</Styled.SelectOption>
            {socialTypes.map((option) => (
              <Styled.SelectOption key={option.value} value={option.value}>
                {option.label}
              </Styled.SelectOption>
            ))}
          </NativeSelect>
          {error.form === "type" && !item?.type && renderError(error.message)}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={error.form === "link" && showError}
            type="text"
            inputProps={{
              name: "link",
              id: "link",
              style: {
                fontFamily: "IRANSans",
                color: "#fff",
              },
            }}
            placeholder="لینک"
            variant="standard"
            size="small"
            onChange={handleChangeField}
            value={item?.link}
          />
          {error.form === "link" && showError && renderError(error.message)}
        </FormControl>
        <FormControl fullWidth>
          <TextField
            error={error.form === "username" && showError}
            type="text"
            inputProps={{
              name: "username",
              id: "username",
              style: {
                fontFamily: "IRANSans",
                color: "#fff",
              },
            }}
            placeholder="آی دی(ID)"
            variant="standard"
            size="small"
            onChange={handleChangeField}
            value={item?.username}
          />
          {error.form === "username" && showError && renderError(error.message)}
        </FormControl>
      </Styled.FormWrapper>
      <Styled.ManipulationButtonsWrapper>
        <CustomButton
          title="انصراف"
          size="small"
          color="#fff"
          variant="outlined"
          onClickButton={handleCancelManipulation}
          sx={{ marginTop: "1rem", borderColor: "#999" }}
        />
        <CustomButton
          title={
            mode === "new"
              ? " ثبت مسیر ارتباطی"
              : `ویرایش مسیر ارتباطی ${
                  item?.type && types?.[item?.type]?.title
                }`
          }
          size="small"
          color="orange"
          variant="contained"
          onClickButton={() =>
            mode === "new" ? handleSaveItem() : handleEditItem()
          }
          sx={{ marginTop: "1rem", color: "#000" }}
        />
      </Styled.ManipulationButtonsWrapper>
    </>
  );
};

export default Form;
