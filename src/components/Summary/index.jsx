export default function Summary() {
  return (
    <div>
      <h2 className="text-3xl font-mediums mb-6">Summary</h2>
      <div className="flex justify-between mb-3">
        <p className="font-medium text-base">Do you have a promo code ?</p>
        <span>
          <svg
            aria-hidden="true"
            className="nds-summary-control"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.5"
              d="M18.966 8.476L12 15.443 5.033 8.476"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-normal text-base">Subtotal</p>
        <p className="font-normal text-base">$180</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-normal text-base">Estimated Shipping & Handling</p>
        <p className="font-normal text-base">$7.00</p>
      </div>
      <div className="flex justify-between mb-3">
        <p className="font-normal text-base">Estimated Tax</p>
        <p className="font-normal text-base">—</p>
      </div>
      <div className="flex justify-between border-t border-b border-zinc-200 py-4">
        <p className="font-normal text-base">Total</p>
        <p className="font-medium text-base">$192.00</p>
      </div>
      <div className="mt-10">
        <button className="block w-full py-4 bg-black text-white rounded-full">
          Checkout
        </button>
      </div>
    </div>
  );
}
