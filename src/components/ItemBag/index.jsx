export default function ItemBag() {
  return (
    <div className="border-b border-zinc-200 pb-7 mb-7">
      <div className="flex">
        <figure className="flex-none w-44">
          <img
            src="https://secure-images.nike.com/is/image/DotCom/DD1391_100?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
            alt=""
          />
        </figure>
        <div className="grow">
          <div className="flex justify-between mb-1">
            <p className="text-base font-medium">Nike Air Max 90 GORE-TEX</p>
            <p className="text-base font-medium">$160.00</p>
          </div>
          <div className="mb-1">
            <p className="text-base text-gray-400 font-normal">
              Men&apos;s Shoes
            </p>
          </div>
          <div className="mb-5">
            <p className="text-base text-gray-400 font-normal">Summit White</p>
          </div>
          <div>
            <button>
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
