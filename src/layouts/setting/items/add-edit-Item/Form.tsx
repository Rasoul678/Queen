import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormHelperText,
  NativeSelect,
  TextField,
} from "@mui/material";
import { getIcon, socialTypes } from "./utils";
import * as Styled from "./ItemManipulation.styles";
import useActions from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

type FormType = "type" | "username" | "link";

interface FormProps {
  error: {
    form: FormType | null;
    message: string;
  };
}

const Form: React.FC<FormProps> = ({ error }) => {
  const { setManipulationItem } = useActions();

  const { item } = useTypedSelector((state) => state.manipulation);

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
    <Styled.FormWrapper>
      <FormControl fullWidth>
        <NativeSelect
          error={item?.type ? error.form === "type" && !item?.type : undefined}
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
  );
};

export default Form;