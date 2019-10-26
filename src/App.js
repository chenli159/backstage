import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Index from "./pages/index/index"
import Login from "./pages/login/login"
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/index" component={Index}></Route>
                </Switch>
            </Router>
        );
    }
}

export default App;