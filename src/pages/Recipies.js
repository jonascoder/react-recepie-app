import React, { Component } from "react";
import RecipieList from "../components/RecipieList";
import Search from "../components/Search";
import { recipeData } from "../data/tempList";
export default class Recipies extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData,
    search: ""
  };
  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipieList recipes={this.state.recipes} />
      </>
    );
  }
}
