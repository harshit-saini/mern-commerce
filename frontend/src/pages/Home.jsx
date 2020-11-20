import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ProductCard from '../components/ProductCard'

const Home  = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {
      const { data } = await Axios.get('/api/products')
      setProducts(data);
    }
    getProducts();
  }, [])

  return (
    <div className="container">
      <div className="d-flex flex-wrap gap-4">
          {products.map(product => (
            <ProductCard key={ product._id } product={product}/>
          ))}
      </div>
    </div>
  )
  
}

export default Home;