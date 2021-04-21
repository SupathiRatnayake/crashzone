import React, { Component } from "react";
import AdvertisementDataService from "../services/advertisement.service";

import Advertisement from "./advertisement.component";

export default class advertisementsList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveAdvertisement = this.setActiveAdvertisement.bind(this);
    // this.removeAlladvertisements = this.removeAlladvertisements.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      advertisements: [],
      currentAdvertisement: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    AdvertisementDataService.getAll().on("value", this.onDataChange);
  }

  componentWillUnmount() {
    AdvertisementDataService.getAll().off("value", this.onDataChange);
  }

  onDataChange(items) {
    let advertisements = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      advertisements.push({
        key: key,
        name: data.name,
        targetProfessionals: data.targetProfessionals,
        imageURL: data.imageURL,
      });
    });

    this.setState({
      advertisements: advertisements,
    });
  }

  refreshList() {
    this.setState({
      currentAdvertisement: null,
      currentIndex: -1,
    });
  }

  setActiveAdvertisement(Advertisement, index) {
    this.setState({
      currentAdvertisement: Advertisement,
      currentIndex: index,
    });
  }

  removeAllAdvertisements() {
    AdvertisementDataService.deleteAll()
      .then(() => {
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { advertisements, currentAdvertisement, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>All Ads</h4>

          <ul className="list-group">
            {advertisements &&
              advertisements.map((Advertisement, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }

                  key={index}
                >
                  <p> {Advertisement.name} </p>
									<img src={Advertisement.imageURL} alt=""></img>

                </li>
              ))}
          </ul>

        </div>

      </div>
    );
  }

}
