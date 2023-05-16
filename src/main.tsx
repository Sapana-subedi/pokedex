import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import { GlobalStyles } from "./globalStyles";
import {
  RecoilRoot} from 'recoil';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>

  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
  </RecoilRoot>
);
