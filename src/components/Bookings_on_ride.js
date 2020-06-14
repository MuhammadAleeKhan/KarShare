import React from "react";
import Header1 from "./Header1";
class Bookings_on_ride extends React.Component {
  constructor(props) {
    super();
    this.state = {
      rideid: props.location.state.id,
      bookings: [],
    };
  }
  async componentDidMount() {
    await fetch("http://localhost:4000/bringbookingsonride", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("tok"),
      },
      body: JSON.stringify({
        id: this.state.rideid,
      }),
    })
      .then(async (res) => await res.json())
      .then((res) => {
        this.setState({ bookings: res });
      });
  }
  render() {
    return (
      <div>
        <Header1 />
        {this.state.bookings.map((arr) => (
          <div key={arr.userid} className="MyRides">
            
              <h5>
                {" "}
                <h5 style={{ fontWeight: "bold" }}>Name: </h5>
                {arr.fullname}
                {/* <br></br> */}
                <br></br>
                <h5 style={{ fontWeight: "bold" }}>Contact: </h5>
                {arr.contactno}
              </h5>
        
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}
export default Bookings_on_ride;
