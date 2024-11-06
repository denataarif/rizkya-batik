import React, { useState } from "react";
import Mainlayout from "../../Component/Organisms/Layout/Mainlayout";
import Typhograph from "../../Component/atoms/Typhograph/Typhograph";
import assets from "../../Assets";
import Card from "../../Component/molecules/Card/Card";
import ModalAddToCart from "../../Component/molecules/ModalAddtoCart/ModalAddToCart";

const Newdrop = () => {
  const [modalAddToCart, setModalAddToCart] = useState(false);
  const HandleModalAddToCart = () => {
    setModalAddToCart(!modalAddToCart);
  };

  const product = [
    {
      id: 1,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 2,
      images: `${assets.Aksamala2}`,
      Caption: "Aksamala Dress Aksa Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 3,
      images: `${assets.Aksamala3}`,
      Caption: "Aksamala Dress Aksa Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 4,
      images: `${assets.Aksamala4}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 5,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 6,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 7,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 8,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
    {
      id: 9,
      images: `${assets.Aksamala1}`,
      Caption: "Aksamala Dress Mala Batik tulis",
      Harga: "2.100.000",
    },
  ];

  return (
    <>
      <Mainlayout
        modalAddToCart={modalAddToCart}
        closeModalAddToCart={() => HandleModalAddToCart()}
      >
        <div className="flex flex-col gap-10 mt-10">
          <Typhograph
            children="NEW DROP"
            className="font-bold text-center text-5xl"
          />

          <div className="flex items-center justify-center">
            <div className="flex relative">
              <div className="hover:blur-sm">
                <img
                  src={assets.Regular}
                  alt="regukar"
                  className="size-[337px]"
                />
              </div>
              <div className="absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30">
                <Typhograph
                  children="REGULAR"
                  className="font-bold text-2xl text-white "
                />
                <Typhograph
                  children="COLLECTION"
                  className="font-bold text-2xl text-white -mt-3"
                />
              </div>
            </div>
            <div className="flex relative">
              <div className="hover:blur-sm">
                <img
                  src={assets.Sekar}
                  alt="regukar"
                  className="size-[337px]"
                />
              </div>
              <div className="absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30">
                <Typhograph
                  children="SEKAR"
                  className="font-bold text-2xl text-white "
                />
                <Typhograph
                  children="WUNGU"
                  className="font-bold text-2xl text-white -mt-3"
                />
              </div>
            </div>
            <div className="flex relative">
              <div className="hover:blur-sm">
                <img
                  src={assets.Srikandi}
                  alt="regukar"
                  className="size-[337px]"
                />
              </div>
              <div className="absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30">
                <Typhograph
                  children="SRIKANDI"
                  className="font-bold text-2xl text-white "
                />
              </div>
            </div>
            <div className="flex relative">
              <div className="hover:blur-sm">
                <img
                  src={assets.Feature}
                  alt="regukar"
                  className="size-[337px]"
                />
              </div>
              <div className="absolute flex flex-col justify-center items-center inset-0 hover:backdrop-blur-sm opacity-0 hover:opacity-100  hover:bg-white/30">
                <Typhograph
                  children="FEATURE"
                  className="font-bold text-2xl text-white "
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-8 ">
              {product.map((items, index) => {
                return (
                  <Card
                    key={index}
                    Image={items.images}
                    Caption={items.Caption}
                    Harga={items.Harga}
                    OnClick={() => HandleModalAddToCart()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Mainlayout>
      <ModalAddToCart
        isOpen={modalAddToCart}
        onClose={() => HandleModalAddToCart()}
      />
    </>
  );
};

export default Newdrop;
