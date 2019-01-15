import React from "react";
import "./Description.css";
import App from "../../App"

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
}

class Description extends React.Component {

    constructor(props) {
        super(props);
    };

    click = () => {
        this.props.parentMethod();
    }
    
    render() {
        return (
            <div>
                <div className="container" id="box">
                    <h4>Are you ready to test your memory!</h4>
                    <hr />
                    <p>Try to memorize where is every character, take your time and then click Play.</p>
                    <button className="btn btn-primary" onClick={this.click}>Play</button>
                </div>
            </div>
        );
    }
}

export default Description;






