import React, { Component } from "react";
import advertisementDataService from "../services/advertisement.service";

export default class advertisement extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateadvertisement = this.updateadvertisement.bind(this);
    this.deleteadvertisement = this.deleteadvertisement.bind(this);

    this.state = {
      currentadvertisement: {
        key: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { advertisement } = nextProps;
    if (prevState.currentadvertisement.key !== advertisement.key) {
      return {
        currentadvertisement: advertisement,
        message: ""
      };
    }

    return prevState.currentadvertisement;
  }

  componentDidMount() {
    this.setState({
      currentadvertisement: this.props.advertisement,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentadvertisement: {
          ...prevState.currentadvertisement,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentadvertisement: {
        ...prevState.currentadvertisement,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    advertisementDataService.update(this.state.currentadvertisement.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentadvertisement: {
            ...prevState.currentadvertisement,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateadvertisement() {
    const data = {
      title: this.state.currentadvertisement.title,
      description: this.state.currentadvertisement.description,
    };

    advertisementDataService.update(this.state.currentadvertisement.key, data)
      .then(() => {
        this.setState({
          message: "The advertisement was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteadvertisement() {
    advertisementDataService.delete(this.state.currentadvertisement.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentadvertisement } = this.state;

    return (
      <div>
        <h4>advertisement</h4>
        {currentadvertisement ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentadvertisement.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentadvertisement.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentadvertisement.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentadvertisement.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteadvertisement}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateadvertisement}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a advertisement...</p>
          </div>
        )}
      </div>
    );
  }
}
