import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="amazin recipies">
        <Link
          to="recipies"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          Search Recipies
        </Link>
      </Header>
    );
  }
}
