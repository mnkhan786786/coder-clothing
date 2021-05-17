import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Product from "../components/Product";

import { AppContext } from "../App";

const Container = styled.div`
  display: flex;
  height: 90%;
`;

const Sidebar = styled.div`
  height: 100%;
  width: 10%;
  box-shadow: 0 2px 5px rgba(78, 76, 80, 0.185);
  display: flex;
  flex-direction: column;
  padding: 20px;

  > * {
    margin-bottom: 20px;
  }
`;

const MainContent = styled.div`
  padding: 20px;
  display: flex;
`;

const SortOption = styled.button`
  border: none;
  background: none;
  color: ${(p) => (p.active ? "#5bbf87" : "#202237cb")};
  padding: 0;
  text-align: left;
  cursor: pointer;
  font-size: 15px;
`;

const SearchBar = styled.input`
  font-size: 14px;
  border-top: none;
  border-left: none;
  border-right: none;

  &:focus {
    outline: none;
  }
`;

const Shop = ({ match }) => {
  const category = match.params.category;
  const { products, searchQuery, setSearchQuery, sort, setSort } = useContext(
    AppContext
  );

  const onSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const onSortClick = (event) => {
    const sortValue = event.target.value;
    console.log(sortValue);

    if (sortValue === "ASC") {
      setSort(sort === "ASC" ? null : "ASC");
    }

    if (sortValue === "DESC") {
      setSort(sort === "DESC" ? null : "DESC");
    }
  };

  const activeLinkStyles = {
    color: "#5bbf87",
  };

  return (
    <Container>
      <Sidebar>
        <SearchBar
          type="text"
          value={searchQuery}
          onChange={onSearchChange}
          placeholder="Search..."
        />
        <h3>CATEGORY</h3>
        <NavLink to="/shop/tops" activeStyle={activeLinkStyles}>
          Tops
        </NavLink>
        <NavLink to="/shop/bottoms" activeStyle={activeLinkStyles}>
          Bottoms
        </NavLink>
        <NavLink to="/shop/outerwear" activeStyle={activeLinkStyles}>
          Outerwear
        </NavLink>
        <h3>SORT</h3>
        <SortOption value="ASC" onClick={onSortClick} active={sort === "ASC"}>
          Price Ascending
        </SortOption>
        <SortOption value="DESC" onClick={onSortClick} active={sort === "DESC"}>
          Price Descending
        </SortOption>
      </Sidebar>
      <MainContent>
        {products
          .filter((p) => p.category === category)
          .map((p) => (
            <Product key={p.name} {...p} />
          ))}
      </MainContent>
    </Container>
  );
};

export default Shop;
