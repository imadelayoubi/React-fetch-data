import React from "react";
const SingleCard = (props) => {
    // recieving empty array(original st
    console.log('props', props.products);
    return (
        <div>
            {props.products.map((element) => {
                return (
                    <div className="singleCard"  >
                        <h5 className="title">{element.name} </h5>
                        <img className='productImage' src={element.image_link} />
                        <p className="description">{element.price} $ </p>
                        <button className='cardButton'> Show description </button>
                    </div>

                )
            })}


        </div>
    )
}

export default SingleCard