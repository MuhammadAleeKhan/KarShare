import React from "react";
import Header1 from "./Header1";
import jwt_decode from "jwt-decode";
import "./Profile.css";

class Profilehome extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      Gender: "",
      contactno: "",
      dateofbirth: "",
      status: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("tok");
    const decoded = jwt_decode(token);
    this.setState({
      fullname: decoded.fullname,
      email: decoded.email,
      Gender: decoded.Gender,
      contactno: decoded.contactno,
      dateofbirth: decoded.dateofbirth,
    });
  }

  render() {
    return (
      <div className="ProfIm">
        <Header1 />
        {/* This is the divs of the code, we will edit */}
        <div>
          <h1 className="ProfileHead"> PROFILE </h1>
        </div>
        <table className="Attributes">
          <tbody>
            <tr>
              <td>Name:</td>
              <td>{this.state.fullname}</td>
            </tr>
            <br />
            <tr>
              <td>Gender:</td>
              <td>{this.state.Gender}</td>
            </tr>
            <br />
            <tr>
              <td>Email Address:</td>
              <td>{this.state.email}</td>
            </tr>
            <br />
            <tr>
              <td>Date of Birth:</td>
              <td>{this.state.dateofbirth}</td>
            </tr>
            <br />
            <tr>
              <td>Contact Number:</td>
              <td>{this.state.contactno}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Profilehome;
