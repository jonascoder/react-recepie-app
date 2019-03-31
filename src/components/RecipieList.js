import React, { Component } from "react";
import Recepie from "./Recipie";
export default class RecipieList extends Component {
  render() {
    const { recipies } = this.props;
    return (
      <>
        <div>
          hello from recipie list
          <Recepie />
        </div>
      </>
    );
  }
}
