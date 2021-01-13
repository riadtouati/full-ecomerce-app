import React from 'react'

export default function Rating(props) {
    const {numReviews } = props;
    return (
        <div className="ratting">
            <span>
                <i 
                className={
                    rating => 1 
                    ? 'fa-fa-star'
                    : rating >= 0.5
                    ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                }
                ></i>
            </span>
            <span>
                <i className="fa fa-star"></i>
            </span>
            <span>
                <i className="fa fa-star"></i>
            </span>
            <span>
                <i className="fa fa-star"></i>
            </span>
            <span>
                <i className="fa fa-star"></i>
            </span>
            <span> 
                {numReviews + ' reviews'} 
            </span>
        </div>
    )
}
