{/* <div id="outer">
    <div id="inner">
        <p id="para">I am a paragrapg</p>
        <h1 id="heading">I'm heading</h1>
        <span id="message">Hello React Learners</span>
    </div>
    <div id="inner1">
        <p id="para">I am a paragrapg</p>
        <h1 id="heading">I'm heading</h1>
        <span id="message">Hello React Learners</span>
    </div>
</div> */}
// const heading = React.createElement("div", { id: "outer" },
//     [React.createElement("div", { id: "inner" },
//         [React.createElement("p", { id: "para" }, "I am a paragraph"),
//         React.createElement("h1", { id: "heading" }, "I'm heading"),
//         React.createElement("span", { id: "message" }, "Hello React Learners"),
//         ]
//     ),
//     React.createElement("div", { id: "inner1" },
//         [React.createElement("p", { id: "para" }, "I am a paragraph"),
//         React.createElement("h1", { id: "heading" }, "I'm heading"),
//         React.createElement("span", { id: "message" }, "Hello React Learners"),
//         ]
//     )
//     ]
// )
const heading = <div id="outer">
    <div id="inner">
        <p id="para">I am a paragrapg</p>
        <h1 id="heading">I'm heading</h1>
        <span id="message">Hello React Learners</span>
    </div>
    <div id="inner1">
        <p id="para">I am a paragrapg</p>
        <h1 id="heading">I'm heading</h1>
        <span id="message">Hello React Learners</span>
    </div>
</div>
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);
