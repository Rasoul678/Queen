import React, { useEffect } from "react";
import * as Styled from "./Setting.styles";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CustomCard from "../../components/customCard/CustomCard";
import SettingHeader from "./items/header/SettingHeader";
import ItemManipulation from "./items/add-edit-Item/ItemManipulation";
import ItemList from "./items/lists/ItemList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";

const breadcrumbItems = ["خانه", "کاربر", "تنظیمات کاربری"];

const Setting: React.FC = () => {
  const { mode } = useTypedSelector((state) => state.manipulation);
  const { getItems } = useActions();

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Styled.SettingWrapper>
      <Styled.ProfileTitle>حساب کاربری</Styled.ProfileTitle>
      <Breadcrumb items={breadcrumbItems} />
      <CustomCard
        sx={{ bgcolor: "#333", marginTop: "0.2rem", padding: "0rem 1rem" }}
      >
        <SettingHeader />
        {mode && <ItemManipulation />}
        <ItemList />
      </CustomCard>
    </Styled.SettingWrapper>
  );
};

export default Setting;
