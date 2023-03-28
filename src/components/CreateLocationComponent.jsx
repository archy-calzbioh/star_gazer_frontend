import React, { Component } from "react";
import LocationService from "../services/LocationService";

class CreateLocationComponent extends Component {
  constructor(props) {
    super(props);

    // Check if this.props.match and this.props.match.params are defined, and provide a default value if not
    const id =
      this.props.match && this.props.match.params
        ? this.props.match.params.id
        : null;

    this.state = {
      // Use the value of id obtained from the conditional check
      id: id,
      name: "",
      gps: "",
      imageUrl: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeGpsHandler = this.changeGpsHandler.bind(this);
    this.saveOrUpdateLocation = this.saveOrUpdateLocation.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      LocationService.getLocationById(this.state.id).then((res) => {
        let location = res.data;
        this.setState({
          name: location.name,
          gps: location.gps,
          imageUrl: location.imageUrl,
        });
      });
    }
  }
  saveOrUpdateLocation = (e) => {
    e.preventDefault();
    let location = {
      name: this.state.name,
      gps: this.state.gps,
      imageUrl: this.state.imageUrl,
    };
    console.log("location => " + JSON.stringify(location));

    // step 5
    if (this.state.id === "_add") {
      LocationService.createLocation(location).then((res) => {
        this.props.history.push("/locations");
      });
    } else {
      LocationService.updateLocation(location, this.state.id).then((res) => {
        this.props.history.push("/locations");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeGpsHandler = (event) => {
    this.setState({ gps: event.target.value });
  };

  changeImageUrlHandler = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  cancel() {
    this.props.history.push("/locations");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Location</h3>;
    } else {
      return <h3 className="text-center">Update Location</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> GPS Coordinates: </label>
                    <input
                      placeholder="GPS Coordinates"
                      name="gps"
                      className="form-control"
                      value={this.state.gps}
                      onChange={this.changeGpsHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Image URL: </label>
                    <input
                      placeholder="Image URL"
                      name="imageUrl"
                      className="form-control"
                      value={this.state.imageUrl}
                      onChange={this.changeImageUrlHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateLocation}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateLocationComponent;
