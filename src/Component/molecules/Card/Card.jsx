import React from "react";
import Typhograph from "../../atoms/Typhograph/Typhograph";

const Card = (props) => {
  const { Caption, Image, Harga, OnClick } = props;
  return (
    <>
      <div className="flex flex-col " onClick={OnClick}>
        <div>
          <img src={Image} alt="Iamge" />
        </div>
        <div className="flex flex-col gap-1 mt-1">
          <Typhograph
            children={Caption}
            className="text-[#82807D] text-lg font-bold"
          />
          <Typhograph children={Harga} className="text-[#82807D] font-medium" />
        </div>
      </div>
    </>
  );
};

export default Card;
