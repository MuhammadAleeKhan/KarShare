import React from "react";
import Header1 from "./Header1";
import "./Bookings.css";
class Bookings extends React.Component {
  constructor() {
    super();
    this.state = {
      bookings: [],
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:4000/bringbookings", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("tok"),
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        this.setState({ bookings: res });
      });
  }

  render() {
    return (
      <div className="BG">
        <Header1 />

          {this.state.bookings.map((arr) => (
            <div key={arr.rideid}>
                      <div className="booking">
              <h5 style={{ fontWeight: "bold" }}>Ride-ID: {arr.rideid}</h5>

              Starting address: {arr.Starting_address}
              <br></br>
              Drop off: {arr.End_address}
              <br></br>
              Rider name: {arr.fullname}
              <br></br>
              Contact: {arr.contactno}
              <br></br>
              Status: {arr.statuss}
              <div></div>
              <br></br>
              <br></br>
            </div>
            </div>
          ))}
        
      </div>
    );
  }
}
export default Bookings;
