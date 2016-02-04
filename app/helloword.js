/// <reference path="./typings/react/react.d.ts" />
/// <reference path="./typings/react/react-dom.d.ts" />
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'react', 'react-dom'], factory);
    }
})(function (require, exports) {
    //var React = require('react');
    //var ReactDOM = require('react-dom');
    var HelloMessage = React.createClass({
        displayName: "HelloMessage",
        render: function () {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    });
    //mountNode = document.getElementById('example');
    ReactDOM.render(React.createElement(HelloMessage, {"name": "John"}), document.getElementById('example'));
});
//# sourceMappingURL=helloword.js.map