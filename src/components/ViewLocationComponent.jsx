import React, { Component } from "react";
import LocationService from "../services/LocationService";

class ViewLocationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      location: {},
    };
  }

  componentDidMount() {
    LocationService.getLocationById(this.state.id).then((res) => {
      this.setState({ location: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Location Details</h3>
          <div className="card-body">
            <div className="row">
              <label> Astronomer: </label>
              <div> {this.state.location.astronomer}</div>
            </div>
            <div className="row">
              <label> Location: </label>
              <div> {this.state.location.location}</div>
            </div>
            <div className="row">
              <label> GPS Coordinates: </label>
              <div> {this.state.location.gps}</div>
            </div>
            <div className="row">
              <label> Image URL: </label>
              <div> {this.state.location.imageUrl}</div>
            </div>
            <div className="row">
              <label> Description: </label>
              <div> {this.state.location.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewLocationComponent;
