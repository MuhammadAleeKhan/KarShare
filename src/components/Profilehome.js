import React from "react";
import Header1 from "./Header1";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
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
      pf_url: "",
    };
  }

  async componentDidMount() {
    await fetch("http://localhost:4000/userdetails", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("tok"),
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        this.setState({
          fullname: res.name,
          email: res.email,
          Gender: res.Gender,
          contactno: res.contact,
          dateofbirth: res.date,
          pf_url: res.pf_url,
        });
      });
  }

  render() {
    return (
      <div className="ProfIm">
        <Header1 />
        {/* This is the divs of the code, we will edit */}
        <div>
          <Link to="/picture">
            <button type="button" className="dp">
              Upload Picture
            </button>
          </Link>
          <Link to="/update">
            <button type="button" className="pro">Update Profile</button>
          </Link>
          <h1 className="ProfileHead"> PROFILE </h1>
        </div>
        <table className="Attributes">
          <tbody>
            <tr>
              <td className="Image">
                <img src={this.state.pf_url}></img>
              </td>
            </tr>
            <tr>
              <td>Name: {this.state.fullname}</td>
            </tr>
            <br />
            <tr>
              <td>Gender: {this.state.Gender}</td>
            </tr>
            <br />
            <tr>
              <td>Email Address: {this.state.email}</td>
            </tr>
            <br />
            <tr>
              <td>Date of Birth: {this.state.dateofbirth}</td>
            </tr>
            <br />
            <tr>
              <td>Contact Number: {this.state.contactno}</td>
            </tr>
          </tbody>
        </table>

         {this.state.pf_url} 
      </div>
    );
  }
}
export default Profilehome;
