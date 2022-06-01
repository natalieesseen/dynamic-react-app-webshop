import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Cart(props) {
  const { cartItems, getTotalSum } = props;

  return (
    <div>
      <HoverBtn>
        Cart
        <ToggleCart>
          {cartItems && cartItems.length > 0 ? (
            <div>
            <h2>Your cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
  
            <tbody>
            {cartItems.map(product =>
              <tr key={product.id}>
              <td><img src={product.url} alt="" width="100px" height="100px" style={{objectFit: 'cover'}} /></td>
              <td>{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price} SEK</td>
            </tr>
            )}
            </tbody>
            </table>
              <SubCart>
                <p>Subtotal: {getTotalSum()} SEK</p>
                <Link to="checkout">Proceed to checkout</Link>
              </SubCart>
            </div>
          ) : (
            <div>
              <h2>Your cart is empty</h2>
            </div>
          )}
        </ToggleCart>
      </HoverBtn>
    </div>
  )
}

const HoverBtn = styled.div`
`

const ToggleCart = styled.div`
width: 450px;
padding: 15px;
background-color: white;
position: absolute;
z-index: 99;
display: none;

${HoverBtn}:hover & {
  display: block;
}
`

const SubCart = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
`

export default Cart
