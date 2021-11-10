import React, { useRef, useEffect } from "react";
import { Box, FormHelperText, NativeSelect, TextField } from "@mui/material";
import { useFormik } from "formik";
import { getIcon, socialTypes, types, getValidationSchema } from "./utils";
import * as Styled from "./ItemManipulation.styles";
import useActions from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import CustomButton from "../../../../components/customButton/CustomButton";

const Form: React.FC = () => {
  const { setManipulationMode, addNewItem, setManipulationItem, editItem } =
    useActions();

  const { item, mode } = useTypedSelector((state) => state.manipulation);
  const { items } = useTypedSelector((state) => state.items);

  const formRef = useRef<HTMLFormElement | null>(null);

  const formik = useFormik({
    initialValues: {
      type: item?.type || "",
      username: item.username,
      link: item.link,
    },
    validationSchema: getValidationSchema(items, item),
    onSubmit: (values) => {
      mode === "new" ? handleSaveItem() : handleEditItem();
    },
  });

  useEffect(() => {
    formik.setFieldValue("type", item?.type || "");
    formik.setFieldValue("username", item.username);
    formik.setFieldValue("link", item.link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id]);

  type EventType = React.ChangeEvent<
    HTMLSelectElement | HTMLTextAreaElement | HTMLInputElement
  >;

  const handleChangeField = (e: EventType) => {
    formik.handleChange(e);

    setManipulationItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelManipulation = () => {
    setManipulationMode(null);
    setManipulationItem({ type: null, username: "", link: "" });
  };

  const handleSaveItem = () => {
    addNewItem(item);
    setManipulationMode(mode);
    setManipulationItem({ type: null, username: "", link: "" });
    formik.resetForm();
  };

  const handleEditItem = () => {
    editItem(item);
    handleCancelManipulation();
  };

  const renderError = (message: string) => (
    <FormHelperText
      style={{
        fontFamily: "IRANSans",
        textAlign: "right",
        color: "crimson",
        position: "absolute",
        top: "1.7rem",
        fontSize: "0.9rem",
      }}
      id="component-error-text"
    >
      {message}
    </FormHelperText>
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      ref={formRef}
    >
      <Styled.FormWrapper>
        <Box width="100%" position="relative">
          <NativeSelect
            fullWidth
            error={formik.touched.type && Boolean(formik.errors.type)}
            value={formik.values.type}
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
          {renderError((formik.touched.type && formik.errors.type) || "")}
        </Box>
        <Box width="100%" position="relative">
          <TextField
            fullWidth
            error={formik.touched.link && Boolean(formik.errors.link)}
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
            value={formik.values.link}
          />
          {renderError((formik.touched.link && formik.errors.link) || "")}
        </Box>
        <Box width="100%" position="relative">
          <TextField
            fullWidth
            error={formik.touched.username && Boolean(formik.errors.username)}
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
            value={formik.values.username}
          />
          {renderError(
            (formik.touched.username && formik.errors.username) || ""
          )}
        </Box>
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
          onClickButton={() => {
            formRef?.current?.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
          }}
          sx={{ marginTop: "1rem", color: "#000" }}
        />
      </Styled.ManipulationButtonsWrapper>
    </form>
  );
};

export default Form;
