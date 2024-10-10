import React, { useState } from "react";
import Navbar from "../../molecules/Navbar/Navbar";
import Footer from "../../molecules/Footer/Footer";
import ModalLogin from "../../molecules/ModalLogin/ModalLogin";
import ModalCart from "../../molecules/ModalCart/ModalCart";
import ModalAddToCart from "../../molecules/ModalAddtoCart/ModalAddToCart";
const Mainlayout = (props) => {
  const { children, className, modalAddToCart, closeModalAddToCart } = props;

  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalCart, setIsModalCart] = useState(false);
  const [isModalAddCart, setIsModalAddCart] = useState(false);
  const handleModalLogin = () => {
    setIsModalLogin(!isModalLogin);
  };
  const handleModalCart = () => {
    setIsModalCart(!isModalCart);
  };
  const handleModalAddCart = () => {
    setIsModalAddCart(!isModalAddCart);
  };
  return (
    <>
      <div>
        <Navbar
          modalLogin={() => handleModalLogin()}
          modalCart={() => handleModalCart()}
        />
        <div className={className}>{children}</div>
        <Footer />
        <ModalLogin isOpen={isModalLogin} onClose={() => handleModalLogin()} />
        <ModalCart isOpen={isModalCart} isClose={() => handleModalCart()} />
        <ModalAddToCart isOpen={modalAddToCart} onClose={closeModalAddToCart} />
      </div>
    </>
  );
};

export default Mainlayout;
