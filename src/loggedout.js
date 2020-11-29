import React from 'react';
export default class Loggedout extends React.Component{
    constructor(props)
    {
        super(props)
        sessionStorage.removeItem('logged')
        this.props.history.push('/')
    }
    render()
    {
        return(<div></div>)
    }

}