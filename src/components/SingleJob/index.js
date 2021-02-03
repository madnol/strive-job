import { Card } from "react-bootstrap";
import DetailPage from "../DetailPage";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import FavouriteCounter from "../FavouriteCounter";
class index extends Component {
  state = {
    favourite: false,
  };

  handleFavourite = () => {
    if (this.state.favourite !== this.state.favourite) {
      this.setState({ favourite: false });
    } else {
      this.setState({ favourite: true });
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="mt-4 ">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.job.location}
            </Card.Subtitle>
            <Card.Text>
              <div

              // dangerouslySetInnerHTML={{ __html: this.props.job.description }}
              ></div>
            </Card.Text>
            <Link to="/details" className="m-2">
              Details
            </Link>

            <Card.Link href={this.props.job.company_url}>website</Card.Link>
            {/* <MdFavorite
              onClick={this.handleFavourite}
              className="ml-2"
              style={
                this.state.favourite ? { color: "#EE502E" } : { color: "#000" }
              }
            /> */}
            <FavouriteCounter />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect()(index);
