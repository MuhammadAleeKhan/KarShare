import React from 'react'
import {Redirect,withRouter} from "react-router-dom"
class Logout extends React.Component{
constructor(){
    super();
    this.clickhandler=this.clickhandler.bind(this)
}

    clickhandler(){
localStorage.removeItem('tok')
localStorage.removeItem('type')
this.props.history.push('/')    
}
    render(){
        return(
        <button type='button' onClick={this.clickhandler}>Log Out</button>)
    }
}
export default withRouter(Logout)