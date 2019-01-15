import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Header extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        win: 0,
        lose: 0
    };

    // handleIncrement increases this.state.count by 1
    handleIncrementWin = () => {
        // We always use the setState method to update a component's state
        this.setState({ win: this.state.win + 1 });
    };

    // handleDecrement decreases this.state.count by 1
    handleIncrementLose = () => {
        // We always use the setState method to update a component's state
        this.setState({ lose: this.state.lose - 1 });
    };

    // The render method returns the JSX that should be rendered
    render(props) {
        console.log(props)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container">
                        <a className="navbar-brand" href="#">Test Your Memory</a>

                        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Win: {this.props.win}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Lose: {this.props.lose}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;






