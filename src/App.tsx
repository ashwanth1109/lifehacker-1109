import React from "react";

import "./styles/index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import useRoutes from "./hooks/useRoutes";

export interface IAppProps {}

export interface IAppState {
  readonly Vehicle: IVehicle;
}

const App = () => {
  const page = useRoutes(
    {
      "/": () => <Home />
    },
    () => <NotFound />
  );
  return page;
};

// class App extends React.PureComponent<IAppProps, IAppState> {
//   render() {

//     return (
//       <div>
//         <h1>Hello Typescript Firebase!</h1>
//       </div>
//     );
//   }
// }

export default App;
