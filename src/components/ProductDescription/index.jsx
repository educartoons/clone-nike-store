const sizes = [
  {
    measure: "M 6 / W 7.5",
    stock: false,
  },
  {
    measure: "M 6 / W 7.5",
    stock: false,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
  {
    measure: "M 6 / W 7.5",
    stock: false,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
  {
    measure: "M 6 / W 7.5",
    stock: true,
  },
];

export default function ProductDescription(props) {
  const { product } = props;

  return (
    <div className="pl-10">
      <h2 className="font-medium text-xl">{product?.name}</h2>
      <h3 className="font-medium text-md mb-4">{product?.gender}</h3>
      <p className="font-medium text-md mb-4">${product?.price}</p>
      <div>
        <div className="flex justify-between">
          <p className="font-medium">Select size</p>
          <p className="text-gray-600">Size guide</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {sizes.map((size, index) => (
            <button
              disabled={!size.stock}
              key={index}
              className="border border-zing-200 py-3 rounded-md text-center disabled:bg-zinc-100 disabled:text-gray-300"
            >
              {size.measure}
            </button>
          ))}
        </div>
      </div>
      <div className="px-8 mt-8 mb-4">
        <p className="text-center">
          4 interest-free payments of $28.75 with Klarna. Learn More
        </p>
      </div>
      <div>
        <button className="block w-full bg-black text-white rounded-full py-4 mb-3">
          Add to Bag
        </button>
        <button className="block w-full bg-white text-black rounded-full border border-zinc-300 py-4">
          Favorite
        </button>
      </div>
      <div className="font-normal mt-12">{product?.description}</div>
    </div>
  );
}
