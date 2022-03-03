import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { makeMockApi } from "./mirage";

makeMockApi();

ReactDOM.render(<App />, document.getElementById("root"));
