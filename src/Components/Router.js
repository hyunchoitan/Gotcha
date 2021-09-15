import React from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Home from "../Routes/Home";
import Movie from "../Routes/Movie"
import TV from "../Routes/TV"
import Detail from "../Routes/Detail"
import Search from "../Routes/Search"
import Header from "./Header"





const router = () => { 
    return(
    <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/films" exact component={Movie}/>
        <Route path="/tv" exact component={TV}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/movie/:id" exact component={Detail}/>
        <Route path="/show/:id" exact component={Detail}/>
        <Redirect from="*" to="/"/>
        </Switch>
    </Router>
)
}

export default router