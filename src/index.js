import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import $ from 'jquery';
import styles from './index.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            myData: [],
        }
    }
    componentDidMount() {
        fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    myData: json
                });
                console.log('json', this.state);
            }, (error) => {
                console.log('Error', error);
            }
            )
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.myData !== this.state.myData) {
            console.log('data state has changed.')
        }
        console.log('prev', prevState.myData);
        console.log('current', this.state.myData);
    }

    render() {
        return (

            <div>
                {this.state.myData.map((element, key) => {
                    return (
                        <div className="singleCard" key={element.id} >
                            <h5 className="title">{element.name} </h5>
                            <img className='productImage' src={element.image_link} />
                            <p className="description">{element.description}</p>
                            <button> Add to Wishlist </button>
                        </div>

                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));