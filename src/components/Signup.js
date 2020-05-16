import React from "react";
import Header from "./Header";
import { Redirect, withRouter } from "react-router-dom";
import "./SignUp.css";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      usertypeid: 1,
      Gender: "",
      contactno: "",
      password: "",
      dateofbirth: "",
      status: "",
    };
    this.handlechange = this.handlechange.bind(this);
    this.submithandler = this.submithandler.bind(this);
  }
  async submithandler() {
    await fetch("http://localhost:4000/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: this.state.fullname,
        contactno: this.state.contactno,
        email: this.state.email,
        password: this.state.password,
        Gender: this.state.Gender,
        usertypeid: this.state.usertypeid,
        dateofbirth: this.state.dateofbirth,
      }),
    })
      .then(async (res) => await res.json())
      .then((res) => window.sessionStorage.setItem("tok", res.token));

    if (window.sessionStorage !== "undefined") {
      this.setState({ status: "failed" });
    }
    this.props.history.push('/');
  }
  handlechange(event) {
    const { name, value, checked, type } = event.target;
    event.target.type == "checkbox"
      ? this.setState({ [event.target.name]: event.target.checked })
      : this.setState({
          [event.target.name]: event.target.value,
        });
  }
  render() {
    if (
      window.sessionStorage.getItem("tok") &&
      window.sessionStorage.getItem("tok") !== "undefined" &&
      window.sessionStorage.getItem("type") == "customer"
    ) {
      return <Redirect to="/" />;
    } else if (
      window.sessionStorage.getItem("tok") &&
      window.sessionStorage.getItem("tok") !== "undefined" &&
      window.sessionStorage.getItem("type") == "Admin"
    ) {
      return <Redirect to="/admin" />;
    }
    return (
      <div className="signup">
        <div>
          <Header />
        </div>
        <title align="center">KarShare SignUp</title>

        <form autoComplete="off" onSubmit={this.submithandler}>
          <div className="boxS">
            {/* <legend style="color: white;">SignUp Form</legend> */}
            <h3 style={{ fontFamily: "Book Antiqua", color: "white" }}>
              Personal Information
            </h3>
            <label
              htmlFor="fullname"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Full Name
            </label>
            <br />
            <input
              type="text"
              value={this.state.fullname}
              name="fullname"
              placeholder="fullname"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />

            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Male
            </label>
            <input
              type="radio"
              value="M"
              name="Gender"
              checked={this.state.Gender == "M"}
              onChange={this.handlechange}
            />
            <br />
            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Female
            </label>
            <input
              type="radio"
              value="F"
              name="Gender"
              checked={this.state.Gender == "F"}
              onChange={this.handlechange}
            />
            <br />
            <label
              htmlFor="Gender"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Other
            </label>
            <input
              type="radio"
              value="O"
              name="Gender"
              checked={this.state.Gender == "O"}
              onChange={this.handlechange}
            />
            <br />
            <br />
            <label
              htmlFor="dateofbirth"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Date of Birth
            </label>
            <input
              type="date"
              value={this.state.dateofbirth}
              name="dateofbirth"
              placeholder="date"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="email"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Email address
            </label>
            <br />

            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="email"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <label
              htmlFor="contactno"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Contact Number*
            </label>
            <br />
            <input
              type="numeric"
              value={this.state.contactno}
              name="contactno"
              placeholder="contactno"
              onChange={this.handlechange}
            />
            <br />
            <br />
            <label
              htmlFor="password"
              style={{
                fontFamily: "Book Antiqua",
                color: "black",
                background: "rgba(255, 255, 255, 0.4)",
                borderRadius: "2px",
              }}
            >
              Password
            </label>
            <br />
            <input
              type="password"
              value={this.state.password}
              name="password"
              placeholder="password"
              onChange={this.handlechange}
              required
            />
            <br />
            <br />
            <input
              type="submit"
              name
              defaultValue="Submit"
              onSubmit={this.submithandler}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </form>
        {window.sessionStorage.getItem("tok")}
        {this.state.dateofbirth}
      </div>
    );
  }
}

export default withRouter(Signup);
