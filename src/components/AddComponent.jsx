import { Component } from "react";
import ResourceService from '../services/ResourceService'
import { ErrorComponent } from "./ErrorComponent";

export class AddComponent extends Component {
    constructor() {
        super()
        this.state = {
            resourceId: "",
            resourceName: "",
            avaialability: true,
            result: false,
            error: false,
            form: ""
        }
        this.addResource = this.addResource.bind(this);
        this.changeAvailability = this.changeAvailability.bind(this);
        this.changeResourceId = this.changeResourceId.bind(this);
        this.changeResourceName = this.changeResourceName.bind(this);
    }

    changeResourceName(event) {
        this.setState({ resourceName: event.target.value });
    }

    changeResourceId(event) {
        this.setState({ resourceId: event.target.value });
    }

    changeAvailability(event) {
        if (event.target.value === "true" || event.target.value === "false" || event.target.value === "True" || event.target.value === "False") {
            this.setState({ avaialability: event.target.value });
            this.setState({
                form: true
            })
        } else {
            this.setState({
                form: false
            })
        }
    }

    addResource(event) {
        event.preventDefault();
        console.log(event);
        let resource = { resourceId: this.state.resourceId, resourceName: this.state.resourceName, avaialability: this.state.avaialability };
        if (resource.avaialability === "true" || resource.avaialability === "false" || resource.avaialability === "True" || resource.avaialability === "False") {
            ResourceService.createResource(resource).then(res => {
                if (res.data === true) {
                    console.log("done");
                    this.setState({
                        result: true,
                        error: false
                    })
                } else {
                    this.setState({
                        error: true,
                        result: false
                    })
                }
            });
        } else {

            this.setState({
                form:false
            })
        }
    }

    render() {
        return (
            <div>
                <br />
                <form id="myform">
                    <div className="form-group row text-center">
                        <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource ID</label>
                        <div className="col-sm-2 text-center">
                            <input type="text" className="form-control" id="inputPassword" placeholder="ID" onChange={this.changeResourceId} required="required" name="id" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row text-center">
                        <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource Name</label>
                        <div className="col-sm-2 text-center">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Name" onChange={this.changeResourceName} required="required" name="name" />
                        </div>
                    </div>
                    <br />
                    <div className="form-group row text-center">
                        <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Availability</label>
                        <div className="col-sm-2 text-center">
                            <input type="text" className="form-control" onChange={this.changeAvailability} id="inputPassword" placeholder="Availability" required="required" name="Availability" />
                        </div>
                        <div>{!this.state.form ? "Please insert Only True or False": null}</div>
                    </div>
                    <br />
                    <div className="form-group row text-center">
                        <button type="submit" className="col-sm-1 btn btn-primary offset-3" onClick={this.addResource} disabled={!this.state.form}>Register</button>
                        <div className="col-sm-4 text-center">
                            <button type="reset" className="col-sm-2 btn btn-primary">Reset</button>
                        </div>
                    </div>
                </form>
                {this.state.error ? <ErrorComponent value="Resource Id Already Present" /> : null}
                {this.state.result ? "Insert Done" : null}
            </div>
        )
    }
}