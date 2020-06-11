import React from "react";
import Header1 from "./Header1";
import { Link, withRouter } from "react-router-dom";
import "./MyRides.css";
class Rides_Placed extends React.Component {
  constructor() {
    super();
    this.state = {
      rides: [],
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:4000/bringmyride", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("tok"),
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        this.setState({ rides: res });
      });
  }

  render() {
    return (
      <div>
        <Header1 />
        {this.state.rides.map((arr) => (
          <div key={arr.rideid} className="MyRides">
            <Link
              to={{
                pathname: "/myrides/details",
                state: { id: arr.rideid },
              }}
            >
              <h5>
                {" "}
                <h5 style={{ fontWeight: "bold" }}>Starting address: </h5>
                {arr.Starting_address}
                {/* <br></br> */}
                <br></br>
                <h5 style={{ fontWeight: "bold" }}>Drop off: </h5>
                {arr.End_adrress}
              </h5>
            </Link>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
export default Rides_Placed;
