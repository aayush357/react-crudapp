import { Component } from "react";
import ResourceService from "../services/ResourceService";
import { ErrorComponent } from "./ErrorComponent";

export class UpdateComponent extends Component {
    constructor() {
        super()
        this.state = {
            resourceId: "",
            resourceName: "",
            avaialability: true,
            result: false,
            error: false,
            updated: false,
            form: ""
        }
        this.searchResource = this.searchResource.bind(this);
        this.changeAvailability = this.changeAvailability.bind(this);
        this.changeResourceId = this.changeResourceId.bind(this);
        this.changeResourceName = this.changeResourceName.bind(this);
        this.updateResource = this.updateResource.bind(this);
    }

    changeResourceName(event) {
        this.setState({ resourceName: event.target.value });
    }

    changeResourceId(event) {
        this.setState({ resourceId: event.target.value });
    }

    changeAvailability(event) {
        this.setState({ avaialability: event.target.value });
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

    searchResource(event) {
        event.preventDefault();
        ResourceService.getResourceById(this.state.resourceId).then(res => {
            if (res.data.resourceId !== -1) {
                this.setState({
                    resourceId: res.data.resourceId,
                    resourceName: res.data.resourceName,
                    avaialability: res.data.avaialability,
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
    }

    updateResource(event) {
        event.preventDefault();
        let resource = {
            resourceId: this.state.resourceId,
            resourceName: this.state.resourceName,
            avaialability: this.state.avaialability
        }
        if (resource.avaialability === "true" || resource.avaialability === "false" || resource.avaialability === "True" || resource.avaialability === "False") {

            ResourceService.updateResource(resource).then(res => {
                if (res.data.resourceId !== -1) {
                    this.setState({
                        updated: true,
                        error: false
                    })
                } else {
                    this.setState({
                        error: true,
                        updated: false
                    })
                }
            });
        } else {
            this.setState({
                form: false
            })
        }
    }

    render() {
        if (this.state.result) {
            return (
                <div>
                    <br />
                    <form action="update" id="myform" method="post">
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource ID</label>
                            <div className="col-sm-2 text-center">
                                <input type="number" className="form-control" id="inputPassword" placeholder="ID" readOnly="readonly" required="required" value={this.state.resourceId} name="id" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource Name</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Name" required="required" value={this.state.resourceName} name="name" onChange={this.changeResourceName} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Availability</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Price" required="required" name="Availability" value={this.state.avaialability} onChange={this.changeAvailability} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <button type="submit" className="col-sm-1 btn btn-primary offset-3" disabled={!this.state.form} onClick={this.updateResource}>Update</button>
                            <div className="col-sm-4 text-center">
                                <button type="reset" className="col-sm-2 btn btn-primary">Reset</button>
                            </div>
                        </div>
                    </form>
                    {this.state.updated ? "Update Done" : null}
                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <form action="editId" id="myform" method="post">
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Product ID</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="ID" required="required" name="id" onChange={this.changeResourceId} />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <button type="submit" className="col-sm-1 btn btn-primary offset-3" onClick={this.searchResource}>Search</button>
                            <div className="col-sm-4 text-center">
                                <button type="reset" className="col-sm-2 btn btn-primary">Reset</button>
                            </div>
                        </div>
                    </form>
                    {this.state.error ? <ErrorComponent value="Resource Id Not Present" /> : null}
                </div>
            )
        }
    }
}