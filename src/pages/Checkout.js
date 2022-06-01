import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { StyledButton } from '../styledComponents';

function Checkout(props) {
  const { cartItems, getTotalSum, emptyCart } = props;

  return (
    <CheckoutTable>
          {props.cartItems && props.cartItems.length > 0 ? (
            <div>
          <h1>Your cart</h1>
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

          <CartTotal>
            <p>Subtotal {getTotalSum()} SEK</p>
            {/* empties the cart :-) */}
            <StyledButton onClick={emptyCart}>Checkout</StyledButton>
          </CartTotal>

            </div>
          ) : (
            <div>
              <h2>Your cart is empty</h2>
              <Link to="/">Continue shopping</Link>
            </div>
          )}
    </CheckoutTable>
  )
}

const CheckoutTable = styled.div`
  margin: 0 auto;
  width: 900px;
`

const CartTotal = styled.div`
  text-align: center;
`

export default Checkout