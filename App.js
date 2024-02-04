const parent= React.createElement(
    "div",
    {id:'parent'},
    [
        React.createElement(
            "div",
            {id:'child1'},[
            React.createElement("h1",{},"i am the h1 tag inside child1"),
            React.createElement("h2",{},"i am the h2 tag inside child1")
        ]),
        React.createElement(
            "div",
            {id:'child2'},[
            React.createElement("h1",{},"i am the h1 tag inside child2"),
            React.createElement("h2",{},"i am the h2 tag inside child2")
        ])
    ]
);

const final=ReactDOM.createRoot(document.getElementById('root'));
final.render(parent);