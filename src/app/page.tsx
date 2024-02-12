import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

const Home = () => {
  const ButtonShop = () => {
    return (
      <button
        className={"bg-white rounded-full py-3 px-6 font-semibold text-sm"}
        type="button"
      >
        Shop Collection
      </button>
    );
  };
  return (
    <>
      <Navbar />
      <div className="w-full relative mb-4">
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
      <div className="relative">
        <div>
          <Image
            src="https://shop.thrashermagazine.com/cdn/shop/files/HOMEPAGE-HEADER-1670_X_700-DT-2.jpg"
            alt="body-img"
            width={0}
            height={0}
            layout="responsive"
            style={{ width: "100%" }}
          />
          <div className="absolute bottom-0 p-8">
            <p className="text-white text-4xl font-bold my-2">NEW ARRIVALS</p>
            <ButtonShop></ButtonShop>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
