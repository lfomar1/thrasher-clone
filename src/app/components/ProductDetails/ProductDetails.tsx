import Image from "next/image";
import ProductInfo from "../UI/ProductInfo";
import { Product } from "@/app/types/types";

const ProductDetails = ({ product }: { product: Product }) => {
  return (
    <div key={product.id}>
      <Image
        src={product.img_url}
        alt={product.name}
        width={0}
        height={0}
        layout="responsive"
      />
      <ProductInfo
        name={product.name}
        type={product.type!}
        price={product.price!}
      />
    </div>
  );
};
export default ProductDetails;
