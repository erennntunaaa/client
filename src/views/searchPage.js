import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import Card from "../components/card";

import "@elastic/react-search-ui-views/lib/styles/styles.css";

export default function SearhPage() {
  return (
    <div className="left-panel">
      <h2>Brands</h2>
      <Card />
    </div>
  );
}
