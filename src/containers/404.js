import React from "react";
import { withRouteData } from "react-static";
import Navbar from "../components/Navbar";

const FourOFour = ({ navbar }) => (
  <div>
    <Navbar {...navbar} />
    <h1>404 - Oh no's! We couldn't find that page :(</h1>
  </div>
);

export default withRouteData(FourOFour);
