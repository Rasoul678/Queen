import React from "react";
import ItemCell from "./Item";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Item } from "../../../../types";

const ItemList: React.FC = () => {
  const { items } = useTypedSelector((state) => state.items);

  return (
    <div>
      {items?.map((item: Item, key: number) => {
        return <ItemCell key={key} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
