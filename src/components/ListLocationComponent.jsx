import React, { Component } from "react";
import LocationService from "../services/LocationService";

class ListLocationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
    };
    this.addLocation = this.addLocation.bind(this);
    this.editLocation = this.editLocation.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
  }

  deleteLocation(id) {
    LocationService.deleteLocation(id).then((res) => {
      this.setState({
        locations: this.state.locations.filter(
          (location) => location.id !== id
        ),
      });
    });
  }
  viewLocation(id) {
    this.props.history.push(`/view-location/${id}`);
  }
  editLocation(id) {
    this.props.history.push(`/add-location/${id}`);
  }

  componentDidMount() {
    LocationService.getLocations().then((res) => {
      this.setState({ locations: res.data });
    });
  }

  addLocation() {
    this.props.history.push("/add-location/_add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Locations List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addLocation}>
            {" "}
            Add Location
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Location </th>
                <th> GPS</th>
                <th> Image URL</th>
            
              </tr>
            </thead>
            <tbody>
              {this.state.locations.map((location) => (
                <tr key={location.id}>
                  <td> {location.firstName} </td>
                  <td> {location.lastName}</td>
                  <td> {location.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editLocation(location.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteLocation(location.id)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewLocation(location.id)}
                      className="btn btn-info"
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListLocationComponent;
