import React, { useContext, useState } from "react";
import styled from "styled-components";
import numeral from "numeral";
import { v4 as uuid } from "uuid";

import { AppContext } from "../App";

const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-around;

  h1 {
    font-size: 40px;
  }

  p {
    font-size: 25px;
  }
`;

const Image = styled.img`
  max-width: 525px;
`;

const Details = styled.div`
  width: 40%;

  > * {
    margin-bottom: 20px;
  }
`;

const PriceSection = styled.div`
  margin-top: 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;

  input {
    width: 30%;
    font-size: 30px;
  }
`;

const SizeSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SizeButton = styled.button`
  cursor: pointer;
  border: 2px solid gray;
  padding: 10px;
  background-color: ${(p) => (p.active ? "#7ce3666b" : "white")};
  font-size: 20px;
`;

const AddButton = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: large;
  background-color: rgba(0, 0, 0, 0.664);
  color: white;
  padding: 10px;
  border: none;
`;

const ProductView = ({ match }) => {
  const { products, addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("small");
  const productName = match.params.name;
  const product = products.find((p) => p.name === productName);

  const onQuantityChange = (event) => {
    const quantity = event.target.value;
    setQuantity(quantity);
  };

  const onSizeButtonClick = (event) => {
    const size = event.target.value;
    setSize(size);
  };

  const onAddClick = () => {
    addToCart({
      ...product,
      id: uuid(),
      size,
      quantity,
    });
  };

  return (
    <Container>
      <Image src={`${process.env.PUBLIC_URL}/${productName}.jpeg`} />
      <Details>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <PriceSection>
          <div>{numeral((product.price / 100) * quantity).format("$0.00")}</div>
          <input type="number" value={quantity} onChange={onQuantityChange} />
        </PriceSection>
        <SizeSection>
          <SizeButton
            value="small"
            onClick={onSizeButtonClick}
            active={size === "small"}
          >
            Small
          </SizeButton>
          <SizeButton
            value="medium"
            onClick={onSizeButtonClick}
            active={size === "medium"}
          >
            Medium
          </SizeButton>
          <SizeButton
            value="large"
            onClick={onSizeButtonClick}
            active={size === "large"}
          >
            Large
          </SizeButton>
          <SizeButton
            value="x-large"
            onClick={onSizeButtonClick}
            active={size === "x-large"}
          >
            x Large
          </SizeButton>
        </SizeSection>
        <AddButton onClick={onAddClick}>Add to cart</AddButton>
      </Details>
    </Container>
  );
};

export default ProductView;
