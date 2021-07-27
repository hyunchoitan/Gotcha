import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from "../Routes/Home"
import TV from "../Routes/TV"
import Detail from "../Routes/Detail"
import Search from "../Routes/Search"




const router = () => { 
    return(
    <Router>
        <>
        <Route path="/" exact component={Home}/>
        <Route path="/tv" exact component={TV}/>
        <Route path="/search" exact component={Search}/>
        <Route path="/detail" exact component={Detail}/>
        </>
    </Router>
)
}

export default router