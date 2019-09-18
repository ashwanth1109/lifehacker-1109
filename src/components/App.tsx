import React from "react";

import "../styles/index.css";

export interface IAppProps {}

export interface IAppState {
  readonly Vehicle: IVehicle;
}

class App extends React.PureComponent<IAppProps, IAppState> {
  render() {
    return (
      <div>
        <h1>Hello Typescript Firebase!</h1>
      </div>
    );
  }
}

export default App;
