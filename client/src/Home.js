import axios from "axios";
import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: null
        };
    }
    
    componentDidMount() {
        axios.get(process.env.REACT_APP_ITEMS_API_URL)
            .then(response => {
                if (response && response.status === 200) {
                    this.setState({
                        message: response.data
                    })
                }
            }, () => {
                this.setState({
                    message: "Failed to detch API."
                });
            });
    };

    render() {
        return (
            <div>{this.state.message}</div>
        );
    }
}

export default Home;