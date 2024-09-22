import React from 'react'
import Typhograph from '../../atoms/Typhograph/Typhograph'

const Card = (props) => {
  const {Caption, Image, Harga} = props
    return (
    <>
        <div>
            <img src={Image} alt="Iamge" />
        </div>
        <div>
            <Typhograph children={Caption}/>
            <Typhograph children={Harga}/>
        </div>
    </>
  )
}

export default Card