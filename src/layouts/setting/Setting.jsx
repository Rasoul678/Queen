import * as Styled from "./Setting.styles";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useSelector } from "react-redux";
import CustomCard from "../../components/customCard/CustomCard";
import SettingHeader from "./items/header/SettingHeader";
import ItemManipulation from "./items/add-edit-Item/ItemManipulation";
import ItemList from "./items/lists/ItemList";

const breadcrumbItems = ["خانه", "کاربر", "تنظیمات کاربری"];

const Setting = () => {
  const { mode } = useSelector((state) => state.manipulation);

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
