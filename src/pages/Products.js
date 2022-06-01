import ProductItem from '../components/ProductItem'
import { useState, useEffect } from 'react';
import { ProductGrid } from '../styledComponents'

function Products(props) {
  const { addToCart } = props;

  // fetch products
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://codexplained.se/cakes.php');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { fetchProducts() }, []);

  return (
    <ProductGrid>
      {products.map(product => <ProductItem key={product.id} product={product} addToCart={addToCart}/>)}
    </ProductGrid>
  )
}

export default Products