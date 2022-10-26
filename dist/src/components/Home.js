import React, { useState } from "react";
export var Home = function (props) {
    var init = props.init;
    var _a = useState(init), counter = _a[0], setCounter = _a[1];
    var add = function () {
        setCounter(counter + 1);
    };
    var remove = function () {
        setCounter(counter - 1);
    };
    var reset = function () {
        setCounter(0);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Webpack App !!"),
        React.createElement("button", { onClick: add }, "Add"),
        React.createElement("button", { onClick: remove }, "Remove"),
        React.createElement("button", { onClick: reset }, "Reset"),
        counter));
};
