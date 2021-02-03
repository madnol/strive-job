import "./Homepage.css";
import SingleJob from "../SingleJob";
import { Row, Col, Container, Modal } from "react-bootstrap";
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import JobList from "../JobList";

export default class Homepage extends Component {
  state = {
    joblist: [],
    job: "",
    location: "",
  };

  searchHandler = e => {
    e.preventDefault();
    this.fetchJobs();
  };

  //*Fetch jobs
  fetchJobs = async () => {
    try {
      const response = await fetch(
        `https://cors--anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.job}&location=${this.state.location}`
      );

      if (response.ok) {
        const jobs = await response.json();
        this.setState({ joblist: jobs });
        console.log(jobs);
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <Modal />
        {/* //Joblist */}

        <Container>
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

          <Row className="row-cols-lg-3 row-cols-md-2 row-cols-xs-1   d-flex space-between mx-auto ">
            {this.state.joblist &&
              this.state.joblist.map((job, index) => {
                return (
                  <Col className="d-flex justify-content-center">
                    <SingleJob job={job} key={index} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}
