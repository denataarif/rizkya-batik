import React from "react";
import assets from "../../../Assets";
import Typhograph from "../../atoms/Typhograph/Typhograph";
import Modal from "../../atoms/Modal/Modal";
import Button from "../../atoms/Button/Button";
const ModalCart = (props) => {
  const { isOpen, isClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={isClose}>
        <div
          className="flex w-full justify-end items-center hover:cursor-pointer"
          onClick={isClose}
        >
          <img src={assets.IcClose} alt="close" className="size-6" />
        </div>
        <div className="flex justify-center items-center gap-4">
          <img src={assets.Cart} alt="" />
          <div className="flex flex-col font-bold text-5xl text-[#3A3A3A]">
            <Typhograph children="KERANJANG" className="-mb-1" />
            <Typhograph children="SAYA" className="-mt-2" />
          </div>
        </div>
        <div className="flex gap-5 mt-12">
          <div className="border border-black p-10 flex justify-between gap-x-5">
            <div>
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col">
                <Typhograph
                  children="Inner Dress mala Batik Tulis"
                  className="font-bold text-2xl text-[#694705]"
                />
                <Typhograph
                  children="Rp 700,000"
                  className="text-[#694705] text-2xl"
                />
              </div>
              <div className="flex flex-col ">
                <Typhograph children="Jumlah" className="text-2xl mb-4" />
                <div className="flex justify-around items-center w-full">
                  <div className="border border-isActive size-8 flex justify-center items-center">
                    <Typhograph
                      children="-"
                      className="text-isActive font-bold text-2xl"
                    />
                  </div>
                  <Typhograph children="1" className="font-bold text-2xl" />
                  <div className="border border-isActive size-8 flex justify-center items-center">
                    <Typhograph
                      children="+"
                      className="text-isActive font-bold text-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-black p-8 flex flex-col gap-8">
            <Typhograph
              children="Ringkasan Pembelanjaan"
              className="font-bold text-3xl"
            />
            <div className="flex justify-between items-center gap-x-10 text-2xl">
              <Typhograph children="harga Normal Produk" />
              <Typhograph children="Rp 700,000" />
            </div>
            <div className="flex justify-between items-center gap-x-10 text-2xl">
              <Typhograph children="Total Harga Produk" />
              <Typhograph children="Rp 700,000" />
            </div>
            <Button className="py-3 font-medium text-xl">ORDER SEKARANG</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCart;
