
const parent=React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"iam tag1"),
            React.createElement("h2",{},"iam tag2"),
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"iam tag1"),
            React.createElement("h2",{},"iam tag2"),
        ]),
     
    ]);

//const heading =  React.createElement("h1",{id:"heading",xyz:"abc"},"Helloworld");
console.log(parent)//object
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);