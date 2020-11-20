import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const ProductCard = ({product}) => {
  return (
    <>
      <div className="card flex-grow-1 flex-shrink-1 p-1" style={{ flexBasis : 300 }}>
        {/* product image */}
          <img className="card-img-top" src={product.image} alt={product.name}/>
      <div className="card-body"> 
          <Link className="card-title lead link-dark" to={`product/${product._id}`}>
          <strong>{product.name}</strong>
        </Link>
          <Rating rating={product.rating} numberOfReviews={product.numReviews}/>
        <h2 className="card-text" > 
          {product.price}
        </h2>
      </div>
      </div>
    </>
  )
}

export default ProductCard
