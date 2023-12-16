import ItemBag from "../ItemBag";

export default function Bag() {
  return (
    <div>
      <h2 className="text-3xl font-mediums mb-6">Bag</h2>
      <ItemBag />
      <ItemBag />
      <ItemBag />
    </div>
  );
}
