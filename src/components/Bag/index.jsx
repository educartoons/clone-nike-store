import { useSelector } from "react-redux";
import ItemBag from "../ItemBag";

export default function Bag() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2 className="text-3xl font-mediums mb-6">Bag</h2>
      {items.map((item) => (
        <ItemBag key={item.id} product={item} />
      ))}
    </div>
  );
}
