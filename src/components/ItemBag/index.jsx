import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartReducer";

export default function ItemBag(props) {
  const { product } = props;

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: e.target.value,
      })
    );
  };

  return (
    <div className="border-b border-zinc-200 pb-7 mb-7">
      <div className="flex">
        <figure className="flex-none w-44">
          <img src={product.image} alt={product.name} />
        </figure>
        <div className="grow ml-5">
          <div className="flex justify-between mb-1">
            <p className="text-base font-medium">{product.name}</p>
            <p className="text-base font-medium">${product.price}</p>
          </div>
          <div className="mb-1">
            <p className="text-base text-gray-400 font-normal">
              {product.gender}
            </p>
          </div>
          <div className="mb-5">
            <p className="text-base text-gray-400 font-normal">Summit White</p>
          </div>
          <div className="flex">
            <div>
              <button onClick={() => dispatch(removeItem(product.id))}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M14.25 7.5v12m-4.5-12v12M5.25 6v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V5.25h2.75m-2.75 0H21m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H3"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <div className="flex">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-normal text-gray-400 pl-3 pr-2 leading-8"
                >
                  Quantity
                </label>
                <select
                  onChange={handleChange}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-1 py-0"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-base font-medium mb-1">Shipping</p>
        <p className="text-base font-normal">
          Arrives by Thu, Dec 21{" "}
          <a className="underline text-base font-medium" href="">
            Edit Location
          </a>
        </p>
      </div>
    </div>
  );
}
