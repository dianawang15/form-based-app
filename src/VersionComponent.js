import React, {Component} from 'react';

export default class VersionComponent extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(<div className="version">{this.props.displaytext}</div>)
    }

}