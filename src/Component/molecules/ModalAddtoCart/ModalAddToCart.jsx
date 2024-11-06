import React, { useState } from "react";
import Modal from "../../atoms/Modal/Modal";
import assets from "../../../Assets";
import Typhograph from "../../atoms/Typhograph/Typhograph";
import Button from "../../atoms/Button/Button";
const ModalAddToCart = (props) => {
  const { isOpen, onClose } = props;

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div
          className="flex justify-end items-center hover:cursor-pointer"
          onClick={onClose}
        >
          <img src={assets.IcClose} alt="icon close" className="size-6" />
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div className="flex flex-col justify-center items-center">
            <div className="mb-3">
              <img
                src={assets.InnerMala}
                alt="gambar baju"
                className="size-80"
              />
            </div>
            <div className="flex justify-between items-center gap-x-4">
              <Typhograph
                children="Terjual 100+"
                className="text-isActive font-bold"
              />
              <div className="w-2 h-2 bg-isActive rounded-full"></div>
              <div>
                <Typhograph
                  children="4.5 (34 Rating)"
                  className="text-isActive font-bold"
                />
              </div>
              <div className="w-2 h-2 bg-isActive rounded-full"></div>
              <Typhograph
                children="Komentar (3)"
                className="text-isActive font-bold"
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <Typhograph
                children="Inner Dress Mala Batik Tulis"
                className="font-bold text-2xl text-isActive"
              />
              <Typhograph
                children="Rp 700,000"
                className="font-bold text-2xl text-isActive"
              />
            </div>
            <div className="flex flex-col ">
              <Typhograph children="Jumlah" className="text-2xl mb-2" />
              <div className="flex justify-around items-center w-full">
                <div className="border border-isActive size-6 flex justify-center items-center">
                  <Typhograph
                    children="-"
                    className="text-isActive font-bold text-xl"
                  />
                </div>
                <Typhograph children="1" className="font-bold text-xl" />
                <div className="border border-isActive size-6 flex justify-center items-center">
                  <Typhograph
                    children="+"
                    className="text-isActive font-bold text-xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <Typhograph children="Size Chart:" className="font-semibold" />
              <Typhograph children="Lingkar Dada : 76 Cm" />
              <Typhograph children="Panjang Dress : 84 Cm" />
              <Typhograph children="Berat: 500g" />
            </div>

            <div className="flex justify-around gap-x-2">
              <Button className="font-bold text-xl bg-white border border-isActive !text-isActive w-full py-2">
                Beli
              </Button>
              <Button className="font-bold text-xl w-full py-2">
                + Keranjang
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddToCart;
