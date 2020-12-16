import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MilestoneForm from "./Container/MilestoneForm/MilestoneForm";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/newMilestone" component={MilestoneForm} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
