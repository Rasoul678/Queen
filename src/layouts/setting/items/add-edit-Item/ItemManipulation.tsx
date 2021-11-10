import React, { useState } from "react";
import CustomCard from "../../../../components/customCard/CustomCard";
import CustomCardContent from "../../../../components/customCard/CustomCardContent";
import CustomCardAction from "../../../../components/customCard/CustomCardAction";
import CustomButton from "../../../../components/customButton/CustomButton";
import * as Styled from "./ItemManipulation.styles";
import Form from "./Form";
import useActions from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { types } from "./utils";

type FormType = "type" | "username" | "link";

interface ErrorState {
  form: FormType | null;
  message: string;
}

const ItemManipulation: React.FC = () => {
  const { setManipulationMode, addNewItem, setManipulationItem, editItem } =
    useActions();
  const { item, mode } = useTypedSelector((state) => state.manipulation);
  const { items } = useTypedSelector((state) => state.items);

  const [error, setError] = useState<ErrorState>({ form: null, message: "" });

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

  return (
    <CustomCard
      sx={{ bgcolor: "#666", margin: "0 0.5rem", padding: "0.2rem 0.5rem" }}
    >
      <CustomCardContent>
        <Styled.CardTitle style={{ color: "#fff" }}>
          افزودن مسیرهای ارتباطی
        </Styled.CardTitle>
        <Form error={error} />
      </CustomCardContent>
      <CustomCardAction>
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
      </CustomCardAction>
    </CustomCard>
  );
};

export default ItemManipulation;
