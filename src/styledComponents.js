import styled from "styled-components";

export const StyledButton = styled.button`
    height: 50px;

    background: #b3bc9b;
    color: #faf9f8;

    padding: 15px 30px;
    border: none;

    &:hover {
        background: #dfdace;
    }
`

export const ProductGrid = styled.ul`
  margin: 0 auto;
  width: 1000px;

  display: flex;
  flex-wrap: wrap;

  list-style: none;
`
