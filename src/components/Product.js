import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import numeral from "numeral";

const StyledLink = styled(Link)`
  position: relative;
  height: 200px;
  width: 200px;
  margin-right: 50px;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const ProductDetails = styled.div`
  position: absolute;
  width: 180px;
  padding: 10px;
  background: black;
  color: white;
  bottom: 0;
  opacity: 60%;
`;

const Product = ({ name, price, category }) => {
  return (
    <StyledLink to={`/products/${name}`}>
        <Image src={`${process.env.PUBLIC_URL}/${name}.jpeg`} />
        <ProductDetails>
          <div>{name}</div>
          <div>{numeral(price / 100).format("$0,0.00")}</div>
        </ProductDetails>
    </StyledLink>
  );
};

export default Product;
