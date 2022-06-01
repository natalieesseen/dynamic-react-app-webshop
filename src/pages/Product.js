import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { StyledButton } from '../styledComponents';

function Product(props) {
  const { addToCart } = props;

  const [product, setProduct] = useState({});
  let params = useParams();

  const fetchProduct = async () => {
    try {
      const response = await fetch('https://codexplained.se/cakes.php?id=' + params.id);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchProduct() }, [])

  return (
    <ProductListing>
      <img src={product.url} alt ="" width="600px"/>

      <ProductInformation>
        <h1>{product.title}</h1>
        <b>{product.price} SEK</b>
        <p>{product.description}</p>
        <p>In stock : {product.storage}</p>

        <StyledButton onClick={() => addToCart(product)}>Add to cart</StyledButton>
      </ProductInformation>
    </ProductListing>
  )
}

const ProductListing = styled.div`
  margin: 0 auto;
  width: 1000px;

  display: flex;
`

const ProductInformation = styled.div`
  margin-left: 40px;
  margin-top: -25px;
`

export default Product