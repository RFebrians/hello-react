import React from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Home from "../pages/home";
import Post from "../pages/post";
import Post2 from "../pages/post2";
import Post4 from "../pages/post4";
import Index from "../pages/index";
import Demo from "../pages/demo";

function AppRoutes() {
  return (
    <AnimatedSwitch
      atEnter={anim.atEnter}
      atLeave={anim.atLeave}
      atActive={anim.atActive}
      mapStyles={mapStyles}
      className="page"
    >
      <Route exact path="/" component={Home} />
      <Route path="/post" component={Post} />
      <Route path="/post2" component={Post2} />
      <Route path="/post4" component={Post4} />
      <Route path="/index" component={Index} />
      <Route path="/demo" component={Demo} />
      <Route path="*" component={Home} />
    </AnimatedSwitch>
  );
}

function mapStyles(styles) {
  return {
    transition: `transform 100ms ease`,
    transform: `translateY(${styles.translateY}%)`
  };
}

const anim = {
  atEnter: {
    translateY: 100
  },
  atLeave: {
    translateY: -130
  },
  atActive: {
    translateY: 0
  }
};

export default AppRoutes;
