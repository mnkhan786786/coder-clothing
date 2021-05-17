import React, { useContext } from "react";
import styled from "styled-components";
import numeral from "numeral";

import { AppContext } from "../App";

const Container = styled.div`
  padding: 30px;
`;

const CartDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  > button {
    cursor: pointer;
    font-size: large;
    border: none;
    padding: 10px;
    background-color: #5bbf87;
    color: white;
  }
`;

const Image = styled.img`
  width: 200px;
`;

const ItemCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(78, 76, 80, 0.185);
`;

const RemoveButton = styled.button`
  cursor: pointer;
  background-color: #fd9090;
  padding: 10px;
  font-size: 16px;
  border: none;
`;

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);
  const cartTotal = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const onRemoveClick = (cartItemId) => {
    removeFromCart(cartItemId);
  };

  return (
    <Container>
      <CartDetails>
        <h2>Total: {numeral(cartTotal / 100).format("$0,0.00")}</h2>
        <button>Check Out</button>
      </CartDetails>
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <ItemCard key={cartItem.id}>
            <Image src={`${process.env.PUBLIC_URL}/${cartItem.name}.jpeg`} />
            <div>{cartItem.name}</div>
            <div>{cartItem.size}</div>
            <div>{cartItem.quantity}</div>
            <RemoveButton onClick={() => onRemoveClick(cartItem.id)}>
              Remove
            </RemoveButton>
          </ItemCard>
        ))
      ) : (
        <h2>Your cart is empty. Start shopping to get started!</h2>
      )}
    </Container>
  );
};

export default Cart;

