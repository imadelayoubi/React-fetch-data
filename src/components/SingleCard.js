import React from "react";

const SingleCard = (props) => {
    // recieving empty array(original state )
    console.log('props', props.products);
    return (
        <div>
            <div className="singleCard"  >
                <h5 className="title">title </h5>
                <img className='productImage' src='' />
                <p className="description">describe me </p>
                <button> Add to Wishlist </button>
            </div>

        </div>
    )
}

export default SingleCard