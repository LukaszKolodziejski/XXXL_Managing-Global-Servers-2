import React from "react";
import Servers from "./containers/Servers/Servers";
import Layout from "./hoc/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Servers />
    </Layout>
  );
};

export default App;
