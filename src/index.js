import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import $ from 'jquery';
import SingleCard from "./components/SingleCard";

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
            .then(data => {
                this.setState({
                    myData: data
                });
                console.log('data', this.state);
            }, (error) => {
                console.log('Error', error);
            }
            )
    }
    // checking if the state changed
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
                {/* passing the data through props  */}
                <SingleCard products={this.state.myData} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));