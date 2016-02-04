/// <reference path="./typings/react/react.d.ts" />
/// <reference path="./typings/react/react-dom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare var mountNode: any;

interface HelloWorldProps {
    name: string;
}

var HelloMessage = React.createClass<HelloWorldProps, any>({
    render: function(){
        return <div>Hello {this.props.name}</div>;
    }
});

mountNode = document.getElementById('example');

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('example'));
