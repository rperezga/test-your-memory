import React from "react";
import "./Play.css";


// By extending the React.Component class, Counter inherits functionality from it
class Play extends React.Component {
    

    // The render method returns the JSX that should be rendered
    render(props) {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3>Click on the card where you see: {this.props.name}</h3>
                        </div>
                        <div className="col-lg-4">
                            <img id="play-character" src={this.props.image} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Play;






