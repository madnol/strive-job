import "./SearchBar.css";

import { Row, Col } from "react-bootstrap";
import React, { Component } from "react";

export default class index extends Component {
  state = {
    job: "",
    location: "",
    jobList: [],
  };

  render() {
    return (
      <div>
        <h1 className="mt-4" style={{ fontWeight: 800, textAlign: "center" }}>
          Strive-Job
        </h1>
        {/* //SearchBar */}
        <Row className="d-flex space-between">
          <Col></Col>
          <Col>
            <div className="home__searchBar mt-4">
              <form
                onSubmit={this.searchHandler}
                className="d-flex justify-content-center"
              >
                <input
                  value={this.state.job}
                  onChange={e => this.setState({ job: e.target.value })}
                  type="text"
                  placeholder="job postion"
                />

                <input
                  value={this.state.location}
                  onChange={e => this.setState({ location: e.target.value })}
                  type="text"
                  placeholder="job location"
                />
                <button>Search</button>
              </form>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
