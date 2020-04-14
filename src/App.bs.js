'use strict';

var React = require("react");
var Global$ReasonReactExamples = require("./Global.bs.js");
var Sidebar1$ReasonReactExamples = require("./Sidebar1.bs.js");

function s2e(prim) {
  return prim;
}

var initialState_dealerPlus1 = [];

var initialState_dealerPlus2 = [];

var initialState_dealerPlus3 = [];

var initialState_dealerPlus0 = [];

var initialState = {
  dealerPlus1: initialState_dealerPlus1,
  dealerPlus2: initialState_dealerPlus2,
  dealerPlus3: initialState_dealerPlus3,
  dealerPlus0: initialState_dealerPlus0
};

function App(Props) {
  var match = React.useReducer(Global$ReasonReactExamples.reducer, initialState);
  return React.createElement("div", {
              id: "main"
            }, React.createElement("div", {
                  style: {
                    left: "50%",
                    position: "absolute",
                    top: "15%"
                  }
                }, "N"), React.createElement("div", {
                  style: {
                    left: "50%",
                    position: "absolute",
                    top: "85%"
                  }
                }, "S"), React.createElement("div", {
                  style: {
                    left: "15%",
                    position: "absolute",
                    top: "50%"
                  }
                }, "W"), React.createElement("div", {
                  style: {
                    left: "85%",
                    position: "absolute",
                    top: "50%"
                  }
                }, "E"), React.createElement("div", {
                  id: "sidebar1"
                }, React.createElement(Sidebar1$ReasonReactExamples.make, {
                      dispatch: match[1]
                    })), React.createElement("div", {
                  id: "sidebar2"
                }, "Sidebar2"), React.createElement("div", {
                  id: "sidebar3"
                }, "Sidebar3"));
}

var make = App;

exports.s2e = s2e;
exports.initialState = initialState;
exports.make = make;
/* react Not a pure module */
