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
      astronomer: "",
      location: "",
      gps: "",
      imageUrl: "",
      description: "",
    };
    this.changeAstronomerHandler = this.changeAstronomerHandler.bind(this);
    this.changeLocationHandler = this.changeLocationHandler.bind(this);
    this.changeGpsHandler = this.changeGpsHandler.bind(this);
    this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
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
          astronomer: location.astronomer,
          location: location.location,
          gps: location.gps,
          imageUrl: location.imageUrl,
          description: location.description,
        });
      });
    }
  }
  saveOrUpdateLocation = (e) => {
    e.preventDefault();
    let location = {
      astronomer: this.state.astronomer,
      location: this.state.location,
      gps: this.state.gps,
      imageUrl: this.state.imageUrl,
      description: this.state.description,
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

  changeAstronomerHandler = (event) => {
    this.setState({ astronomer: event.target.value });
  };
  changeLocationHandler = (event) => {
    this.setState({ location: event.target.value });
    };

  changeGpsHandler = (event) => {
    this.setState({ gps: event.target.value });
  };

  changeImageUrlHandler = (event) => {
    this.setState({ imageUrl: event.target.value });
  };

  changeDescriptionHandler = (event) => {  
    this.setState({ description: event.target.value });
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
                    <label> Astronomer: </label>
                    <input
                      placeholder="Astronomer"
                      name="name"
                      className="form-control"
                      value={this.state.astronomer}
                      onChange={this.changeAstronomerHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Location: </label>
                    <input
                        placeholder="Location"
                        name="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.changeLocationHandler}
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
                  <div className="form-group"> 
                    <label> Description: </label>   
                    <input
                        placeholder="Description"
                        name="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.changeDescriptionHandler}
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
