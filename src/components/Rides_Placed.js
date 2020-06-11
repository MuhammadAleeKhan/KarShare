import React from 'react'
import Header1 from './Header1'
import {Link, withRouter} from 'react-router-dom'
class Rides_Placed extends React.Component{
constructor(){
    super()
    this.state={
        rides:[]
    }        
    
}
    async componentDidMount() {
        await fetch("http://localhost:4000/bringmyride", {
          method: "get",
          headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') }}).
          then(async res => await res.json()).
          then(res => {this.setState({rides:res})})
    
      }

      render(){
          return(
              <div>
                  <Header1></Header1>
{this.state.rides.map((arr) => (
            <li key={arr.rideid}>
            <Link   to={
       {     
         pathname: '/myrides/details',
         state:{id:arr.rideid}
        } }>
            <h5>              Starting address: {arr.Starting_address}
              <br></br>
              Drop off: {arr.End_adrress}
              </h5>
              </Link>
              <br></br>
              <br></br>
              <div>
              </div>
              <br></br>
              <br></br>
            </li>
          ))}

              </div>
          )
      }
    }
export default Rides_Placed;