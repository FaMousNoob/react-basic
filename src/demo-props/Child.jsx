import React, { Component } from 'react';

class Child extends Component {
    render() {
        console.log('props: ', this.props);
        return (
            <div>
                <h1>Child</h1>
                <p>name: {this.props.ten} nói {this.props.noi}</p>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Child;