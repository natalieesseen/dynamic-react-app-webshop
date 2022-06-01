import React from 'react'
import Nav from './Nav'
import Cart from './Cart'
import styled from "styled-components"

function Header(props) {
  const { cartItems, getTotalSum } = props;

  return (
    <StyledHeader>
      <Nav />
      <img src="/cake.png" alt="logo placeholder" width="100px" />
      <Cart cartItems={cartItems} getTotalSum={getTotalSum} />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
margin 10px auto;
padding: 25px;

display: flex;
justify-content: center;
align-items: center;
gap: 50px;
`

export default Header