import { Component } from "react";
import ResourceService from "../services/ResourceService";
import { ErrorComponent } from "./ErrorComponent";

export class DeleteComponent extends Component {
  constructor() {
    super();
    this.state = {
      resourceId: "",
      resourceName: "",
      avaialability: true,
      delete: false,
      error: false
    }
    this.changeId = this.changeId.bind(this);
    this.deleteResource = this.deleteResource.bind(this);
  }

  changeId(event) {
    this.setState({ resourceId: event.target.value });
  }

  deleteResource(event) {
    event.preventDefault();
    ResourceService.deleteResource(this.state.resourceId)
      .then((res) => {
        if (res.data === true) {
          console.log("done");
          this.setState({
            delete: true,
            error: false
          })
        } else {
          this.setState({
            error: true,
            delete: false
          })
        }
      })
  }

  render() {
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
            <button type="submit" className="col-sm-1 btn btn-primary offset-3" onClick={this.deleteResource}>Remove</button>
            <div className="col-sm-4 text-center">
              <button type="reset" className="col-sm-2 btn btn-primary">Reset</button>
            </div>
          </div>
        </form>
        {this.state.error ? <ErrorComponent value="Resource Id Not Present" />: null}
        {this.state.delete ? "Delete Done": null}
      </div>
    )
  }

}