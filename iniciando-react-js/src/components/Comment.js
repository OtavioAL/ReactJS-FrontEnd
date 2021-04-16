import React from 'react'

export default class Comments extends React.Component{
    render(){
        return(
            <h2>{this.props.text}</h2>
        );
    }
}