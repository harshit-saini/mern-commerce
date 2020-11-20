import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import Rating from '../components/Rating'
import Axios from 'axios'

const ProductDetails = ({match}) => {

  const [product, setProducts] = useState({});

    useEffect(() => {

      const getProduct = async () => {
        const { data } = await Axios.get(`/api/product/${match.params.id}`)
        console.log(data)
        setProducts(data);
      }
      getProduct();
    }, [match])
    

  return (
    <div className="container">
      <Link to="/" className="btn btn-small btn-outline-dark">HOME</Link> 
      <div className="row mt-2">
        <div className="col-md-6">
          <img className="img-fluid border-1 rounded mb-4 mb-sm-0" src={product.image} alt={ product.name}/>
        </div>
        <div className="col-md-6">
          <h1 className="m-1">{product.name}</h1>
          <h4>{product.brand}</h4>
          <br />
          <Rating className="m-1" rating={product.rating} numberOfReviews={product.numReviews} />
          <hr />
        <div className="row">
          <div className="col-md-6">
            <h1>Price : ${product.price}</h1>
            <p>{product.countInStock >= 0 ? 'In Stocks' : 'Out of Stocks'}</p>    
            <br/>
            <span className="lead">Description</span>
            <p>{product.description}</p>
          </div>
            <div className="col-12 col-md-6 border rounded p-2 ">
              <div className="d-grid" style={{bottom : 0, left : 0}}>
                <button disabled={!(product.countInStock > 0)} className="btn btn-dark">Add to cart</button>
              </div>
          </div>    
      </div>
        </div>
      </div>

      
    </div>
  )
}
export default ProductDetails
