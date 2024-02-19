interface ProductInfo {
  name: string;
  type: string;
  price: string;
}
const ProductInfo = ({ name, type, price }: ProductInfo) => {
  return (
    <div className="text-center text-sm my-4">
      <p className="font-medium mb-1">{name}</p>
      <p className="text-gray-500 mb-1">{type}</p>
      <p className="text-xs mb-1">{price}</p>
    </div>
  );
};
export default ProductInfo;
