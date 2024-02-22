import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { navbarCategories, Category } from "./navbarCategories";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5">
        <Link href="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0732/6056/4797/files/THRASHER_MAGAZINE_-_LOGO_KEY-LOGO-BLACK.svg?v=1679007096"
            alt="logo"
            layout="instrinsic"
            width={0}
            height={0}
            style={{ width: "185px", height: "auto" }}
          />
        </Link>
        <div className="flex space-x-16 text-sm font-semibold">
          {navbarCategories.map((category: Category) => (
            <div key={category.title}>
              <Link href={category.href}>{category.title}</Link>
            </div>
          ))}
        </div>
        <div className="flex space-x-5">
          <Search />
          <User />
          <ShoppingBag />
        </div>
      </div>
      <div className="w-full relative mb-10">
        <Image
          src="https://shop.thrashermagazine.com/cdn/shop/files/HOMEPAGE-HEADER-1670_X_700-DT_6b774441-95c3-46d2-8364-7bdb3aab8384.jpg"
          alt="banner"
          width={0}
          height={0}
          layout="responsive"
          style={{ width: "100%" }}
        />
        <div className="absolute top-0 text-white w-full h-full flex justify-center items-center flex-col gap-3 tracking-widest">
          <p className="text-6xl font-extrabold">FREE SHIPPING</p>
          <p className="text-2xl">
            ON ALL DOMESTIC ORDERS WITH PURCHASE OF A HOODIE & T-SHIRT
          </p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
