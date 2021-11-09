import { useSelector } from "react-redux";
import Item from "./Item";

const ItemList = () => {
  const { items } = useSelector((state) => state.items);

  return (
    <div>
      {items?.map((item, key) => {
        return <Item key={key} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
