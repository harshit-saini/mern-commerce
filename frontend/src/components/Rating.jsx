import React from 'react'

const Rating = ({rating, numberOfReviews}) => {
  return (
    <div>

      <i style={{color : "yellow"}} className={ rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'fas fa-star-alt' }></i>

      <i style={{color : "yellow"}} className={ rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'fas fa-star-alt' }></i>

      <i style={{color : "yellow"}} className={ rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'fas fa-star-alt' }></i>

      <i style={{color : "yellow"}} className={ rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'fas fa-star-alt' }></i>

      <i style={{ color: "yellow" }} className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'fas fa-star-alt'}></i>
      
      <span className="ml-1">  
        {numberOfReviews} Reviews
      </span>
      
    </div>
  )
}

export default Rating