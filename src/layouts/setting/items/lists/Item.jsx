import { useState } from "react";
import CustomCard from "../../../../components/customCard/CustomCard";
import CustomCardContent from "../../../../components/customCard/CustomCardContent";
import * as Styled from "./ItemList.styles";
import CustomButton from "../../../../components/customButton/CustomButton";
import { Delete, Edit } from "@mui/icons-material";
import { types } from "../add-edit-Item/utils";
import useActions from "../../../../hooks/useActions";
import CustomDialog from "../../../../components/customDialog/CustomDialog";

const Item = ({ item }) => {
  const { setManipulationMode, setManipulationItem, deleteItem } = useActions();
  const [isOpen, setIsOpen] = useState(false);

  const Icon = types?.[item?.type]?.icon;

  const handleEditMode = () => {
    setManipulationMode("edit");
    setManipulationItem(item);
  };

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsOpen(false);
    deleteItem(item?.id);
  };

  return (
    <CustomCard
      sx={{
        margin: "0.5rem",
        backgroundColor: "#444",
        height: "2.5rem",
      }}
    >
      <CustomCardContent sx={{ padding: "0", color: "#fff" }}>
        <CustomDialog
          isOpen={isOpen}
          item={item}
          headerTitle="آیا از تصمیم خود مطمین هستی؟"
          message={`برای حذف مسیر ارتباطی '${
            types?.[item?.type]?.title
          }' لطفا تایید را بنویسید`}
          acceptTitle="حذف"
          cancelTitle="انصراف"
          confirmValue="تایید"
          onCancel={() => setIsOpen(false)}
          onConfirm={handleConfirmDelete}
          onClose={() => setIsOpen(false)}
        />
        <Styled.ItemContentContainer>
          <Styled.ItemInfoContainer>
            <Styled.ItemProp>
              <Icon />
              {types?.[item?.type]?.title}
            </Styled.ItemProp>
            <Styled.ItemProp>
              <span style={{ color: "#999" }}>آیدی(ID): </span>
              <span style={{ direction: "ltr" }}>
                {item?.username || "..."}
              </span>
            </Styled.ItemProp>
            <Styled.ItemProp>
              <span style={{ color: "#999" }}>لینک: </span>
              <span style={{ color: "orange" }}>{item?.link || "..."}</span>
            </Styled.ItemProp>
          </Styled.ItemInfoContainer>
          <Styled.ItemActionContainer>
            <CustomButton
              title="ویرایش"
              size="small"
              color="orange"
              variant="text"
              onClickButton={handleEditMode}
              icon={Edit}
            />
            <CustomButton
              title="حذف"
              size="small"
              color="crimson"
              variant="text"
              onClickButton={handleOpenDialog}
              icon={Delete}
            />
          </Styled.ItemActionContainer>
        </Styled.ItemContentContainer>
      </CustomCardContent>
    </CustomCard>
  );
};

export default Item;
