import { Component } from "react";
import '../styles/ErrorStyles.css';

export class ErrorComponent extends Component {
    constructor(props) {
        super()
        console.log(props);
    }

    render(){
        return(
            <div className="error">
                Error: {this.props.value}
            </div>
        )
    }

}