import React, { useState } from "react";
import Typhograph from "../../atoms/Typhograph/Typhograph";
import assets from "../../../Assets";
import Button from "../../atoms/Button/Button";
import Modal from "../../atoms/Modal/Modal";
const ModalLogin = (props) => {
  const { isOpen, onClose } = props;

  const [isRegis, setIsRegis] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div
          className="flex justify-end items-center hover:cursor-pointer"
          onClick={onClose}
        >
          <img src={assets.IcClose} alt="icon close" className="size-6" />
        </div>
        <div className="flex justify-center items-center gap-x-10">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <img
              src={assets.ImgLogin}
              alt="Gambar Login"
              className="size-[285px]"
            />
            <Typhograph
              children="Dapatkan layanan VIP dengan login 1-klik:"
              className="text-xl text-[#82807D]"
            />
            <ul className="list-disc text-xl text-[#82807D]">
              <li>
                <Typhograph children="Kamu bisa chat dengan rizkyabatik." />
              </li>
              <li>
                <Typhograph children="Jadilah yang pertama mendapat diskon khusus." />
              </li>
              <li>
                <Typhograph children="Jangan pernah kehilangan order kamu." />
              </li>
            </ul>
          </div>
          {isRegis === false ? (
            <div className="flex flex-col gap-y-4">
              <Typhograph
                children="Login"
                className="text-5xl font-bold mb-4"
              />
              <div className="flex gap-x-1">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="relative z-10 gap-2 bg-transparent outline-none border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive"
                />
                <img src={assets.IcEmail} alt="" />
              </div>
              <div className="flex gap-x-1">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="relative z-10 gap-2 bg-transparent outline-none border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive"
                />
                <img src={assets.IcPass} alt="" />
              </div>
              <div className="w-full flex justify-end items-center">
                <Button className="px-12 py-1 font-semibold text-xl">
                  Login
                </Button>
              </div>
              <div
                className="flex justify-end items-center"
                onClick={() => setIsRegis(true)}
              >
                <Typhograph
                  children="Belum Punya Akun ?"
                  className="text-[#82807D] hover:cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4">
              <Typhograph
                children="Registrasi"
                className="text-5xl font-bold mb-4"
              />
              <div className="flex gap-x-1">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="relative z-10 gap-2 bg-transparent outline-none border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive"
                />
                <img src={assets.IcEmail} alt="" />
              </div>
              <div className="flex gap-x-1">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="relative z-10 gap-2 bg-transparent outline-none border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive"
                />
                <img src={assets.IcPass} alt="" />
              </div>
              <div className="flex gap-x-1">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                  className="relative z-10 gap-2 bg-transparent outline-none border border-isActive border-b-2 border-t-0 border-l-0 border-r-0 focus:border-b-2 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-isActive"
                />
                <img src={assets.IcPass} alt="" />
              </div>
              <div className="w-full flex justify-end items-center">
                <Button className="px-12 py-1 font-semibold text-xl">
                  Registrasi
                </Button>
              </div>
              <div
                className="flex justify-end items-center"
                onClick={() => setIsRegis(false)}
              >
                <Typhograph
                  children="Sudah Punya Akun ?"
                  className="text-[#82807D] hover:cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default ModalLogin;
