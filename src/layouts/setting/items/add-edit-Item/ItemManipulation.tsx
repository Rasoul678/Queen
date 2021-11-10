import React from "react";
import CustomCard from "../../../../components/customCard/CustomCard";
import CustomCardContent from "../../../../components/customCard/CustomCardContent";
import * as Styled from "./ItemManipulation.styles";
import Form from "./Form";

const ItemManipulation: React.FC = () => {
  return (
    <CustomCard
      sx={{
        bgcolor: "#666",
        margin: "0 0.5rem 1rem 0.5rem",
        padding: "0.2rem 0.5rem 0 0.5rem",
      }}
    >
      <CustomCardContent>
        <Styled.CardTitle style={{ color: "#fff" }}>
          افزودن مسیرهای ارتباطی
        </Styled.CardTitle>
        <Form />
      </CustomCardContent>
    </CustomCard>
  );
};

export default ItemManipulation;
