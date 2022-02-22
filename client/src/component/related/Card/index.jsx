/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {
  CardWrapper,
  CardImage,
  ModalIcon,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardTextPrice,
  CardTextSalesPriceOriginal,
  CardTextSalesPrice,

} from './CardStyle';



export function Card({
  title, imgUrl, price, body, salesPrice, handleModalOnclick,
}) {
  let img = '';
  if (imgUrl == null) {
    img = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
  } else {
    img = imgUrl;
  }
  // const img = imgUrl || './Image-Not-Available.png';
  return (
    <CardWrapper>
      <CardImage background={img} />
      <AiFillStar
        onClick={handleModalOnclick}
        style={{
          position: 'fixed',
          top: '10px',
          left: '220px',
        }}
        size="20px"
        color="rgb(245,245,245)"
      />
      {/* <ModalIcon onClick={handleModalOnclick}>⭐️</ModalIcon> */}
      <CardTextWrapper>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>{body}</CardTextBody>
        {salesPrice && <CardTextSalesPriceOriginal>{price}</CardTextSalesPriceOriginal>}
        {salesPrice && <CardTextSalesPrice>{`$${salesPrice}`}</CardTextSalesPrice>}
        {!salesPrice && <CardTextPrice>{price}</CardTextPrice>}
      </CardTextWrapper>
    </CardWrapper>
  );
}
