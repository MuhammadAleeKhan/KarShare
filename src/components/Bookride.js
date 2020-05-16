import React from "react";
import { GoogleComponent } from "react-google-location";
import Header1 from "./Header1";
class Bookride extends React.Component {
  constructor() {
    super();
    this.state = {
      lati: "",
      lngi: "",
      Place: "",
      rides: [],
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  handlechange(e) {
    this.setState({
      lati: e.coordinates.lat,
      lngi: e.coordinates.lng,
      Place: e.place,
    });
  }
  async submithandler() {
    await fetch("http://localhost:4000/bringrides", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        'authorization': localStorage.getItem("tok")
      },
      body: JSON.stringify({
        End_adrress: this.state.Place,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ rides: res }));
  }
  render() {
    return (
      <div>
        <Header1 />
        <GoogleComponent
          apiKey={"AIzaSyB8BvbZp0i7LZw4mbhDiRKdbjYH_BZfM_c"}
          language={"en"}
          country={"country:pk"}
          coordinates={true}
          onChange={this.handlechange}
        />
        <br></br>
        <button onClick={this.submithandler}>Find rides</button>
        <br></br>
        {this.state.rides.map((arr) => (
          <li key={arr.rideid}>
            Starting address: {arr.Starting_address}
            <br></br>
            Drop off: {arr.End_adrress}
            <br></br>
            Rider name:{arr.fullname}
            <br></br>
          </li>
        ))}
      </div>
    );
  }
}
export default Bookride;
