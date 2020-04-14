'use strict';


function reducer(state, action) {
  if (action) {
    console.log("LogToConsole!");
    return state;
  } else {
    return state;
  }
}

exports.reducer = reducer;
/* No side effect */
