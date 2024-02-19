import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/UI/Button";
import tShirtBlack from "./assets/tShirtBlack.webp";
import skatePoster from "./assets/skatePoster.webp";
import hoodie from "./assets/hoodie.webp";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-1">
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
              <Button btnName="Shop Collection" lightMode={true}></Button>
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
              <Button btnName="Classics" lightMode={true}></Button>
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
              <Button btnName="Hoodies" lightMode={true}></Button>
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
              <Button btnName="T-shirts" lightMode={true}></Button>
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
              <Button btnName="Headwear" lightMode={true}></Button>
            </div>
          </div>
        </div>
        <div className="w-full py-5">
          <div className="relative">
            <Image
              src="https://shop.thrashermagazine.com/cdn/shop/files/666-HOMEPAGE-BLOCK-1670_X_500-DT_7c2c2e8b-b05c-435d-bda1-ef32a6189966.jpg?v=1684449344&width=1400"
              alt="banner"
              width={0}
              height={0}
              layout="responsive"
              style={{ maxWidth: "100%" }}
            />

            <div className="absolute bottom-0 p-5">
              <p className="text-3xl font-bold text-white">66 6th St.</p>
              <p className="text-3xl font-bold text-white">San Francisco, CA</p>
              <p className="text-white">
                A premium collection of limited pieces,
              </p>
              <p className="text-white mb-2">
                sold exclusively online & at our San Francisco flagship store.
              </p>
              <Button btnName="Shop Collection" lightMode={true}></Button>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src="https://shop.thrashermagazine.com/cdn/shop/files/HOMEPAGE-BLOCK-1670_X_500-DT_c7afcf07-2e6f-4be9-8929-d6b9380e4924.jpg?v=1694735257&width=1400"
            alt="banner"
            width={0}
            height={0}
            layout="responsive"
            style={{ maxWidth: "100%" }}
          />
          <div className="absolute bottom-0 p-4">
            <Button btnName="Subscribe to the mag" lightMode={true}></Button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
