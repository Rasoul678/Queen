import React from "react";
import CustomButton from "../../../../components/customButton/CustomButton";
import CustomCardContent from "../../../../components/customCard/CustomCardContent";
import * as Styled from "../../Setting.styles";
import { Add, Edit } from "@mui/icons-material";
import useActions from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { types } from "../add-edit-Item/utils";

const SettingHeader: React.FC = () => {
  const { setManipulationMode } = useActions();
  const { item, mode } = useTypedSelector((state) => state.manipulation);

  const handleAddItem = () => {
    if (mode === "edit" || mode === "new") return;
    setManipulationMode("new");
  };

  return (
    <CustomCardContent>
      <Styled.CardTitle>مسیرهای ارتباطی</Styled.CardTitle>
      <CustomButton
        title={
          mode === "edit"
            ? `ویرایش مسیر ارتباطی ${item?.type && types?.[item?.type]?.title}`
            : "افزودن  مسیر ارتباطی"
        }
        size="small"
        icon={mode === "edit" ? <Edit /> : <Add />}
        color="orange"
        onClickButton={handleAddItem}
        sx={{ marginTop: "1rem" }}
      />
    </CustomCardContent>
  );
};

export default SettingHeader;
