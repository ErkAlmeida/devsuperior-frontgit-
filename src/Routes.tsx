import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Title from "./core/components/Title/intex";
import Home  from "./pages/Home/Index";
import Profile from "./pages/Profile";

const Routes =  () => (
    <BrowserRouter>
        <Title />
        <Switch>
            <Route path="/" exact> 
                <Home />
            </Route>
            <Route path="/profile"> 
                <Profile />
            </Route>
        </Switch>    
    </BrowserRouter>

);

export default Routes;