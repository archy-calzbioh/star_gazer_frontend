import React, { Component } from "react";
import LocationService from "../services/LocationService";

class CreateLocationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
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
          firstName: location.firstName,
          lastName: location.lastName,
          emailId: location.emailId,
        });
      });
    }
  }
  saveOrUpdateLocation = (e) => {
    e.preventDefault();
    let location = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
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

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
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
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
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
