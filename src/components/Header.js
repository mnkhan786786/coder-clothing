import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(78, 76, 80, 0.185);

  a {
    margin: 10px;
  }
`;

const Link = styled(NavLink)`
  font-weight: bold;
`;

const Title = styled.h2`
  color: #5bbf87;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const activeLinkStyles = {
  color: "#5bbf87",
};

const Header = ({ cartCount }) => {
  return (
    <Container>
      <div>
        <Link to="/shop/tops" activeStyle={activeLinkStyles}>
          SHOP
        </Link>
        <Link to="/contact" activeStyle={activeLinkStyles}>
          CONTACT
        </Link>
      </div>
      <Title>Coder Clothing</Title>
      <div>
        <Link to="/cart" activeStyle={activeLinkStyles}>
          CART
        </Link>
        <span>{cartCount}</span>
      </div>
    </Container>
  );
};

export default Header;
