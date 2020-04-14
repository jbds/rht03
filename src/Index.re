// some comment
[%%raw {| window.onresize = forceGlobalReRender |}];

let forceGlobalReRender = () => { 
  Js.log("ReRender whole window");
  //ReactDOMRe.renderToElementWithId(<BlinkingGreeting>{React.string("Hello!")}</BlinkingGreeting>,"root");
  ReactDOMRe.renderToElementWithId(<App />,"root");
};

// do one initial render 
let () = forceGlobalReRender();
