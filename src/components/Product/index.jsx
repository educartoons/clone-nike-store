export default function Product(props) {
  const { product } = props;

  return (
    <div className="mb-20 relative">
      <figure>
        <img className="w-full" src={product.image} alt={product.name} />
      </figure>
      <h3 className="text-md text-red-900 font-medium mt-5">{product.extra}</h3>
      <h2 className="text-md font-medium">{product.name}</h2>
      <h3 className="text-gray-400 text-md font-normal">{product.subtitle}</h3>
      <h3 className="text-gray-400 text-md font-normal">
        {product.gender === "male" ? "Men Shoes" : "Women Shoes"}
      </h3>
      <h3 className="text-gray-400 text-md font-normal">
        {product.colors} Colors
      </h3>
      <p className="text-md mt-3 font-normal">${product.price}</p>
      <div className="absolute top-3 left-8 bg-white px-4 py-1 rounded-3xl">
        <img
          className="inline -mt-1"
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNzU5NzcgMTAuNVY4LjI1SDIwLjI1OThWMTEuMjVINi43NTk3N0M1LjkyOTc3IDExLjI1IDUuMjU5NzcgMTEuOTIgNS4yNTk3NyAxMi43NVYxOC43NUM1LjI1OTc3IDE5LjU4IDUuOTI5NzcgMjAuMjUgNi43NTk3NyAyMC4yNUgxNy4yNTk4QzE4LjA4OTggMjAuMjUgMTguNzU5OCAxOS41OCAxOC43NTk4IDE4Ljc1VjExLjI1IiBzdHJva2U9IiMxMjhBMDkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTE0LjI1OTggMy43NUMxMy4wMTk4IDMuNzUgMTIuMDA5OCA0Ljc2IDEyLjAwOTggNlY4LjI1SDE0LjI1OThDMTUuNDk5OCA4LjI1IDE2LjUwOTggNy4yNCAxNi41MDk4IDZDMTYuNTA5OCA0Ljc2IDE1LjQ5OTggMy43NSAxNC4yNTk4IDMuNzVaIiBzdHJva2U9IiMxMjhBMDkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTkuNzU5NzcgMy43NUMxMC45OTk4IDMuNzUgMTIuMDA5OCA0Ljc2IDEyLjAwOTggNlY4LjI1SDkuNzU5NzdDOC41MDk3NyA4LjI1IDcuNTA5NzcgNy4yNCA3LjUwOTc3IDZDNy41MDk3NyA0Ljc2IDguNTA5NzcgMy43NSA5Ljc1OTc3IDMuNzVaIiBzdHJva2U9IiMxMjhBMDkiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPHBhdGggZD0iTTEyLjAwOTggOC41MzAwM1YyMC4yNSIgc3Ryb2tlPSIjMTI4QTA5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+Cjwvc3ZnPgo="
          alt=""
        />
        <p className="text-green-700 text-md inline-block ml-1">Top Gift</p>
      </div>
    </div>
  );
}
