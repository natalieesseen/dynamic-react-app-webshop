import React from 'react'
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import styled from "styled-components"
import { StyledButton } from '../styledComponents'

function ProductItem(props) {
    const { product, addToCart } = props;

    return (
            <ProductArticle>
                <motion.div
                  animate={{ y: -10 }}
                  transition={{ ease: "easeOut", duration: 1 }}
                >
                <Link to={`/products/${product.id}`}>
                    <img src={product.url} alt="" width="300px" height="300px" style={{objectFit: 'cover'}} />
                    <h4>{product.title}</h4>
                    <p>{product.price} SEK</p>
                </Link>
                <StyledButton onClick={() => addToCart(product)}>Add to cart</StyledButton>
                </motion.div>
            </ProductArticle>
  )
}

const ProductArticle = styled.li`
    width: 300px;
    margin: 20px 15px;
`

export default ProductItem