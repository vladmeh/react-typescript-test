/// <reference path="typings/react/react.d.ts" />
/// <reference path="typings/react/react-dom.d.ts" />
var React = require('react');
var ReactDOM = require('react-dom');
var HelloMessage = React.createClass({
    render: function () {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
});
ReactDOM.render(React.createElement(HelloMessage, {"name": "John"}), document.getElementById('example'));
//# sourceMappingURL=helloword.js.map