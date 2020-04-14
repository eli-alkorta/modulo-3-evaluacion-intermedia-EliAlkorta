import React from "react";
import pokemon from "../data/pokemon";
import PokeList from "./PokeList";
import "../Stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: pokemon,
    };
  }

  render() {
    return (
      <div className="App">
        <PokeList dataList={this.state.data} />
      </div>
    );
  }
}

export default App;
