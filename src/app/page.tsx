import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import tShirtBlack from "./assets/tShirtBlack.webp";
import skatePoster from "./assets/skatePoster.webp";
import hoodie from "./assets/hoodie.webp";

const Home = () => {
  const Button = (props: { btnName: string }) => {
    return (
      <button
        className={"bg-white rounded-full py-3 px-6 font-semibold text-sm"}
        type="button"
      >
        {props.btnName}
      </button>
    );
  };
  return (
    <>
      <Navbar />
      <section className="hero-1">
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
              <Button btnName="Shop Collection"></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-2">
        <div className="flex py-5 gap-5 w-full">
          <div className="relative max-w-xl">
            <Image
              src={tShirtBlack}
              alt="banner"
              style={{ maxWidth: "100%", height: "100%" }}
            />
            <div className="absolute bottom-0 p-4">
              <Button btnName="Classics"></Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={skatePoster}
              alt="banner"
              style={{ maxWidth: "100%", height: "100%" }}
            />
            <div className="absolute bottom-0 p-4">
              <Button btnName="Mark Gonzales Collection"></Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={hoodie}
              alt="banner"
              style={{ maxWidth: "100%", height: "100%" }}
            />
            <div className="absolute bottom-0 p-4">
              <Button btnName="Hoodies"></Button>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-5">
          <div className="relative w-full">
            <Image
              src="https://shop.thrashermagazine.com/cdn/shop/files/THRASHER_TRADEMARK-AVERY_JOHNSON-Q2_2023-GTMHOMEPAGE-BLOCK-720X480-DT_1.jpg?v=1702486649&width=700"
              alt="banner"
              width={0}
              height={0}
              layout="responsive"
              style={{ width: "100%" }}
            />
            <div className="absolute bottom-0 p-4">
              <Button btnName="T-shirts"></Button>
            </div>
          </div>
          <div className="relative w-full">
            <Image
              src="https://shop.thrashermagazine.com/cdn/shop/files/CAMPAIGN_TEMPLATEHOMEPAGE-BLOCK-720X480-DT_fa7d8186-807d-4f8a-8d08-fc61acd038f6.jpg?v=1707513741&width=700"
              alt="banner"
              width={0}
              height={0}
              layout="responsive"
              style={{ maxWidth: "100%" }}
            />
            <div className="absolute bottom-0 p-4">
              <Button btnName="Headwear"></Button>
            </div>
          </div>
        </div>
        <div className="w-full py-5">
          <Image
            src="https://shop.thrashermagazine.com/cdn/shop/files/666-HOMEPAGE-BLOCK-1670_X_500-DT_7c2c2e8b-b05c-435d-bda1-ef32a6189966.jpg?v=1684449344&width=1400"
            alt="banner"
            width={0}
            height={0}
            layout="responsive"
            style={{ maxWidth: "100%" }}
          />
        </div>
      </section>
    </>
  );
};
export default Home;
