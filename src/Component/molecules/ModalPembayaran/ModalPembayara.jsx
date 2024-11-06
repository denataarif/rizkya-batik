import React from "react";
import Modal from "../../atoms/Modal/Modal";
import assets from "../../../Assets";
const ModalPembayara = (props) => {
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
        <div className="flex justify-between gap-x-3 items-center">
          <div className="flex flex-col gap-y-3">
            <input type="text" placeholder="Nama Lengkap Penerima" />
            <input type="text" placeholder="Nomor HP Penerima" />
            <input type="text" placeholder="Alamat Tujuan" />
            <input type="text" placeholder="Detail Alamat Tujuan" />
          </div>
          <div className="flex flex-col gap-y-3">
            <input type="text" placeholder="Nama Lengkap Penerima" />
            <input type="text" placeholder="Nama Lengkap Penerima" />
            <input type="text" placeholder="Nama Lengkap Penerima" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalPembayara;
