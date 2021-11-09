import { useState } from "react";
import CustomCard from "../../../../components/customCard/CustomCard";
import CustomCardContent from "../../../../components/customCard/CustomCardContent";
import CustomCardAction from "../../../../components/customCard/CustomCardAction";
import CustomButton from "../../../../components/customButton/CustomButton";
import * as Styled from "./ItemManipulation.styles";
import Form from "./Form";
import { useSelector } from "react-redux";
import useActions from "../../../../hooks/useActions";
import { types } from "./utils";

const ItemManipulation = () => {
  const { setManipulationMode, addNewItem, setManipulationItem, editItem } =
    useActions();
  const { mode, item } = useSelector((state) => state.manipulation);
  const { items } = useSelector((state) => state.items);

  const [error, setError] = useState({ form: "", message: "" });

  const handleCancelManipulation = () => {
    setManipulationMode();
    setManipulationItem();
  };

  const handleError = () => {
    const usernameAlreadyExists = items.find(
      (i) => i.username === item.username && item.username && item.id !== i.id
    );

    const linkAlreadyExists = items.find(
      (i) => i.link === item.link && item.link && item.id !== i.id
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
    setManipulationItem();
    setError({ form: "", message: "" });
  };

  const handleEditItem = () => {
    if (handleError().hasError) {
      return;
    }

    editItem(item);
    setManipulationMode();
    setManipulationItem();
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
                : `ویرایش مسیر ارتباطی ${types?.[item.type]?.title}`
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
