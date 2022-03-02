import { Component } from "react";
import ResourceService from "../services/ResourceService";

export class TotalComponent extends Component {
    constructor() {
        super()
        this.state = {
            resourceArr: [],
            result: false,
            error: false
        }
        this.totalResources = this.totalResources.bind(this);
        this.renderRows = this.renderRows.bind(this);
    }

    componentDidMount() {
        this.totalResources();
    }

    totalResources() {
        ResourceService.Resources()
            .then((res) => {
                let arr = [];
                for (let index = 0; index < res.data.length; index++) {
                    arr.push({
                        resourceId: res.data[index].resourceId,
                        resourceName: res.data[index].resourceName,
                        avaialability: res.data[index].avaialability
                    })
                }
                this.setState({
                    resourceArr: arr
                })
            })
    }

    renderRows() {
        let list = [];
        this.state.resourceArr.map((ele, index) => {
            list.push(
                <tr className="text-center" key={index}>
                    <th scope="row">{ele.resourceId}</th>
                    <td>{ele.resourceName}</td>
                    <td>{ele.avaialability.toString()}</td>
                </tr>
            )
            return list;
        })
        return list;
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Resource ID</th>
                            <th scope="col">Resource Name</th>
                            <th scope="col">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}