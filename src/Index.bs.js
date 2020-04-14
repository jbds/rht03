'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$ReasonReactExamples = require("./App.bs.js");

window.onresize = forceGlobalReRender
;

function forceGlobalReRender(param) {
  console.log("ReRender whole window");
  return ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonReactExamples.make, { }), "root");
}

forceGlobalReRender(undefined);

exports.forceGlobalReRender = forceGlobalReRender;
/*  Not a pure module */
