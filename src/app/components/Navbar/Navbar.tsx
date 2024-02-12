import Image from "next/image";
import { Search, User, ShoppingBag } from "lucide-react";
import { navbarCategories, Category } from "./navbarCategories";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <Image
        src="https://cdn.shopify.com/s/files/1/0732/6056/4797/files/THRASHER_MAGAZINE_-_LOGO_KEY-LOGO-BLACK.svg?v=1679007096"
        alt="logo"
        layout="instrinsic"
        width={0}
        height={0}
        style={{ width: "185px", height: "auto" }}
      />
      <div className="flex space-x-16">
        {navbarCategories.map((category: Category) => (
          <div key={category.title}>
            <h1>{category.title}</h1>
          </div>
        ))}
      </div>
      <div className="flex space-x-5">
        <Search />
        <User />
        <ShoppingBag />
      </div>
    </div>
  );
};
export default Navbar;
