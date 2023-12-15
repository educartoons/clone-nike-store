export default function Product(props) {
  const { product } = props;

  return (
    <div className="w-1/3 px-4 mb-20">
      <figure>
        <img className="w-full" src={product.image} alt={product.name} />
      </figure>
      <h2 className="text-lg">{product.name}</h2>
      <h3 className="text-gray-400 text-lg">{product.subtitle}</h3>
      <h3 className="text-gray-400 text-lg">{product.colors} Colors</h3>
      <p className="text-lg mt-3">${product.price}</p>
    </div>
  );
}
