import React, { Component } from "react";
import MatchDataService from "../services/match.service";

export default class MatchesList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCode = this.onChangeSearchCode.bind(this);
    //this.retrieveMatches = this.retrieveMatches.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    this.setActiveMatch = this.setActiveMatch.bind(this);
    this.searchCode = this.searchCode.bind(this);

    this.state = {
      matches: [],
      currentMatch: null,
      currentIndex: -1,
      searchCode: ""
    };
  }

  componentDidMount() {
    this.searchCode();
  }

  onChangeSearchCode(e) {
    const searchCode = e.target.value;

    this.setState({
      searchCode: searchCode
    });
  }

  // retrieveMatches(){
  //   MatchDataService.getAll()
  //     .then(response => {
  //       this.setState({
  //         matches: response.data
  //       });
  //       console.log(response.data)
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  // refreshList() {
  //   this.retrieveMatches();
  //   this.setState({
  //     currentMatch: null,
  //     currentIndex: -1
  //   });
  // }

  setActiveMatch(match, index) {
    this.setState({
      currentMatch: match,
      currentIndex: index
    });
  }

  searchCode() {
    let mycode = this.state.searchCode.replace("#", "-");

    MatchDataService.findByCode(mycode)
      .then(response => {
        this.setState({
          matches: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchCode, matches, currentMatch, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Connect Code"
              value={searchCode}
              onChange={this.onChangeSearchCode}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCode}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Matches List</h4>

          <ul className="list-group">
            {matches &&
              matches.map((match, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMatch(match, index)}
                  key={index}
                >
                  {match.metadata.winner}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6">
          {currentMatch ? (
            <div>
              <h4>match</h4>
              <div>
                <label>
                  <strong>startAt:</strong>
                </label>{" "}
                {currentMatch.metadata.startAt}
              </div>
              <div>
                <label>
                  <strong>game_complete:</strong>
                </label>{" "}
                {currentMatch.metadata.game_complete}
              </div>
              <div>
                <label>
                  <strong>winner:</strong>
                </label>{" "}
                {currentMatch.metadata.winner}
              </div>

            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a match...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

}