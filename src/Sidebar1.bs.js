'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function s2e(prim) {
  return prim;
}

function Sidebar1(Props) {
  var dispatch = Props.dispatch;
  return React.createElement("div", undefined, React.createElement("button", {
                  style: {
                    color: "Red",
                    fontSize: "3vh",
                    marginTop: "1vh"
                  },
                  onClick: (function (_e) {
                      return Curry._1(dispatch, /* AddItem */0);
                    })
                }, "Test"), React.createElement("button", {
                  style: {
                    color: "Green",
                    fontSize: "3vh",
                    marginTop: "1vh"
                  },
                  onClick: (function (_e) {
                      return Curry._1(dispatch, /* LogToConsole */1);
                    })
                }, "Log to Console"));
}

var make = Sidebar1;

exports.s2e = s2e;
exports.make = make;
/* react Not a pure module */
