import React from "react";
import {Route, Switch, HashRouter} from "react-router-dom";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Services from "./components/Services/services.js";
import WebDesign from "./components/Portfolio/WebDesign.js";
import Graphic from "./components/Portfolio/Graphics.js";
import LandingPage from "./components/Landing/landing.js";
import Blogs from "./components/Blog/Blog.js";
import Resumes from "./components/Portfolio/Resume";

export default () =>
    <HashRouter>
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/Home" exact component={Home}/>
            <Route path="/About" exact component={About}/> 
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/Portfolio" exact component={Portfolio}/>
            <Route path="/Services" exact component={Services}/>
            <Route path="/Webdev" exact component={WebDesign}/>
            <Route path="/Graphics" exact component={Graphic}/>
            <Route path="/Blog" exact component={Blogs}/>
            <Route path="/Resume" exact component={Resumes}/>
        </Switch>
    </HashRouter>