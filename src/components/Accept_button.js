import React from 'react'

class Accept_button extends React.Component{
constructor(props){
    super()
    this.OnAccept=this.OnAccept.bind(this)
}

OnAccept(){

}
    render(){
if(this.props.stauss=="Accepted"){
    return(
        <div>
            Accepted
        </div>
    )
} else {
    return(
        <div>
        <button></button>
        </div>
    )
}
    }
}