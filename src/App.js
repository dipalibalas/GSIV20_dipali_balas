import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
  useHistory,
} from "react-router-dom";
import "./App.css";
import axios from "./axios";
import request from "./requests";
import ListPage from "./component/ListPage";
import DetailPage from "./component/DetailPage";

const AppRoute = () => {
  let routes = useRoutes([
    { path: "/", element: <ListPage /> },
    { path: "/details", element: <DetailPage /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <>
      <Router>
        <AppRoute />
      </Router>
    </>
  );
};

export default App;
