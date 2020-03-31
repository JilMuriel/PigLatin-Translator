import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import './app.scss'

import Navbar from './components/navbar/navbar.component'
import Translator from './pages/translator/translator.component'
import History from './pages/history/history.component'


class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Translator} />
            <Route path="/history" component={History} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
