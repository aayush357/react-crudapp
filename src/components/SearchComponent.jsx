import { Component } from "react";
import ResourceService from '../services/ResourceService';
import { ErrorComponent } from "./ErrorComponent";

export class SearchComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resourceId: "",
            resourceName: "",
            avaialability: true,
            result: false,
            error: false
        }
        this.searchResource = this.searchResource.bind(this);
        this.changeId = this.changeId.bind(this);
    }

    changeId(event) {
        this.setState({
            resourceId: event.target.value
        })
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

    render() {
        if (this.state.result) {
            return (
                <div>
                    <br />
                    <form id="myform">
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource ID</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="ID" required="required" value={this.state.resourceId} name="id" disabled="disabled" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource Name</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Name" required="required" value={this.state.resourceName} name="name" disabled="disabled" />
                            </div>
                        </div>
                        <br />
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Availability</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="Price" required="required" name="price" value={this.state.avaialability} disabled="disabled" />
                            </div>
                        </div>
                        <br />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <br />
                    <form id="myform">
                        <div className="form-group row text-center">
                            <label htmlFor="inputPassword" className="offset-2 col-sm-2 col-form-label">Resource ID</label>
                            <div className="col-sm-2 text-center">
                                <input type="text" className="form-control" id="inputPassword" placeholder="ID" required="required" name="id" onChange={this.changeId} />
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
                    {this.state.error ? <ErrorComponent value="Resource Id Not Present" />: null}
                </div>
            )
        }
    }
}