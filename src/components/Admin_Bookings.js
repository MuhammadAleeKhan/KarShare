import React from 'react';
import HeaderAdmin from './HeaderAdmin'

class Admin_Bookings extends React.Component{
    constructor(){
        
        super()
    this.state={
        bookings:[],
        name:''
    }       
    this.handlechange=this.handlechange.bind(this)
    this.Deletehandler=this.Deletehandler.bind(this)
    }

    async componentDidMount() {
        await fetch("http://localhost:4000/adminbringbookings", {
          method: "get",
          headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') }
          
        }).
          then(async res => await res.json()).
          then(res => {this.setState({bookings:res})})
    
      }
       handlechange(event) {
        const { name, value, checked, type } = event.target;
        event.target.type == "checkbox"
          ? this.setState({ [event.target.name]: event.target.checked })
          : this.setState({
              [event.target.name]: event.target.value,
            });
            console.log('hello')
            var fname=this.state.name+'%'
             fetch("http://localhost:4000/adminbringbookingsspecific", {
                method: "post",
                headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
                body: JSON.stringify({
                    name: fname
         
                   })
                 }).
                then(async res => await res.json()).
                then(res => {this.setState({bookings:res})})
      }
      Deletehandler(id){
        fetch("http://localhost:4000/admindeletebookings", {
            method: "delete",
            headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
            body: JSON.stringify({
                id: id
     
               })
             }).
            then(async res => await res.json()).
            then(res => {this.setState({rides:res})})
      }
    
    render(){
        return(
            <div>
                <HeaderAdmin></HeaderAdmin>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Bootstrap Table with Search Column Feature</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n    body {\n        color: #566787;\n        background: #f7f5f2;\n\t\tfont-family: 'Roboto', sans-serif;\n\t}\n\t.table-wrapper {\n        background: #fff;\n        padding: 20px 25px;\n        margin: 30px auto;\n\t\tborder-radius: 3px;\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    }\n    .table-title {\n\t\tcolor: #fff;\n\t\tbackground: #40b2cd;\t\t\n\t\tpadding: 16px 25px;\n\t\tmargin: -20px -25px 10px;\n\t\tborder-radius: 3px 3px 0 0;\n    }\n    .table-title h2 {\n        margin: 5px 0 0;\n        font-size: 24px;\n    }\n\t.search-box {\n        position: relative;\n        float: right;\n    }\n\t.search-box .input-group {\n\t\tmin-width: 300px;\n\t\tposition: absolute;\n\t\tright: 0;\n\t}\n\t.search-box .input-group-addon, .search-box input {\n\t\tborder-color: #ddd;\n\t\tborder-radius: 0;\n\t}\t\n    .search-box input {\n        height: 34px;\n        padding-right: 35px;\n        background: #f4fcfd;\n        border: none;\n        border-radius: 2px !important;\n    }\n\t.search-box input:focus {\n        background: #fff;\n\t}\n\t.search-box input::placeholder {\n        font-style: italic;\n    }\n\t.search-box .input-group-addon {\n        min-width: 35px;\n        border: none;\n        background: transparent;\n        position: absolute;\n        right: 0;\n        z-index: 9;\n        padding: 6px 0;\n    }\n    .search-box i {\n        color: #a0a5b1;\n        font-size: 19px;\n        position: relative;\n        top: 2px;\n    }\n    table.table {\n        table-layout: fixed;\n        margin-top: 15px;\n    }\n    table.table tr th, table.table tr td {\n        border-color: #e9e9e9;\n    }\n    table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n    }\n    table.table th:first-child {\n        width: 60px;\n    }\n    table.table th:last-child {\n        width: 120px;\n    }\n    table.table td a {\n        color: #a0a5b1;\n        display: inline-block;\n        margin: 0 5px;\n    }\n\ttable.table td a.view {\n        color: #03A9F4;\n    }\n    table.table td a.edit {\n        color: #FFC107;\n    }\n    table.table td a.delete {\n        color: #E34724;\n    }\n    table.table td i {\n        font-size: 19px;\n    }    \n"
    }}
  />
  <div className="container">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Customer <b>Details</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <div className="search-box">
              <div className="input-group">
                <input
                  type="text"
                  id="search"
                  name="name"
                  className="form-control"
                  placeholder="Search by Name"
                  onChange={this.handlechange}
                />
                <span className="input-group-addon">
                  <i className="material-icons"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "20%" }}>Ride ID</th>
            <th style={{ width: "30%" }}>Starting Address</th>
            <th style={{ width: "30%" }}>End Address</th>
            <th style={{ width: "30%" }}>Customer name</th>
            <th style={{ width: "20%" }}>Status</th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.state.bookings.map((arr) => (
          <tr>
            <td>{arr.bookid}</td>
            <td>{arr.rideid}</td>
            <td>{arr.Starting_address}</td>
            <td>{arr.End_address}</td>
            <td>{arr.fullname}</td>
            <td>{arr.statuss}</td>
            <td>
              <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                <i className="material-icons" ></i>
              </a>
              <a
                href=""
                className="delete"
                title="Delete"
                data-toggle="tooltip"
              >
                <i className="material-icons" onClick={()=>this.Deletehandler(arr.rideid)}></i>
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    
    </div>
  </div>
            </div>
        )
    }
}
export default Admin_Bookings
{}