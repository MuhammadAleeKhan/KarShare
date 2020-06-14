import React from 'react';
import HeaderAdmin from './HeaderAdmin'
import {withRouter} from 'react-router-dom'
class Admin_users extends React.Component{
    constructor(){
        
        super()
    this.state={
        users:[],
        name:'',
        email:'',
        Gender:'',
        contactno:'',
        id:''
    }       
    this.handlechange=this.handlechange.bind(this)
    this.handlechange1=this.handlechange1.bind(this)
    this.Deletehandler=this.Deletehandler.bind(this)
    this.UpdateHandler=this.UpdateHandler.bind(this)
    this.setstatehandler=this.setstatehandler.bind(this)
    }

    async componentDidMount() {
      if(localStorage.getItem('type')=='Admin'){
        await fetch("http://localhost:4000/adminbringusers", {
          method: "get",
          headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') }
          
        }).
          then(async res => await res.json()).
          then(res => {this.setState({users:res})})
    
      } else{
        this.props.history.push('/login')
      }}
       handlechange(event) {
                event.target.type == "checkbox"
          ? this.setState({ [event.target.name]: event.target.checked })
          : this.setState({
              [event.target.name]: event.target.value,
            });
            console.log('hello')
            var fname=event.target.value+'%'
             fetch("http://localhost:4000/adminbringusersspecific", {
                method: "post",
                headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
                body: JSON.stringify({
                    name: fname
         
                   })
                 }).
                then(async res => await res.json()).
                then(res => {this.setState({users:res})})
      }
      handlechange1(event) {
        const { name, value, checked, type } = event.target;
        event.target.type == "checkbox"
          ? this.setState({ [event.target.name]: event.target.checked })
          : this.setState({
              [event.target.name]: event.target.value,
            });
        
      }
      Deletehandler(id){
        fetch("http://localhost:4000/admindeleteuser", {
            method: "delete",
            headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
            body: JSON.stringify({
                id: id
     
               })
             }).
            then(async res => await res.json()).
            then(res => {this.setState({users:res})})
      }
      async UpdateHandler(){
        await fetch("http://localhost:4000/adminuseredit", {
          method: "put",
          headers: { "Content-Type": "application/json",'authorization':localStorage.getItem('tok') },
          body: JSON.stringify({
              id:this.state.id,
              name:this.state.name,
              email:this.state.email,
              Gender:this.state.Gender,
              contactno:this.state.contactno
   
             })
           }).
          then(async res => await res.json()).
          then(res => {this.setState({users:res})})
}
      
      setstatehandler(id,name,email,contact,gender){
this.setState({id:id,name:name,email:email,contactno:contact,Gender:gender})
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
            <th style={{ width: "30%" }}>Name</th>
            <th style={{ width: "22%" }}>Contact no</th>
            <th style={{ width: "30%" }}>Email</th>
            <th style={{ width: "10%" }}>Gender</th>
            <th style={{ width: "22%" }}>Date of birth</th>
            <th style={{ width: "22%" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {this.state.users.map((arr) => (
          <tr>
            <td>{arr.userid}</td>
            <td>{arr.fullname}</td>
            <td>{arr.contactno}</td>
            <td>{arr.email}</td>
            <td>{arr.Gender}</td>
            <td>{arr.dateofbirth}</td>
            <td>
              <a href="#" className="edit" title="Edit" data-toggle="modal" data-target="#addEmployeeModal" onClick={()=>this.setstatehandler(arr.userid,arr.fullname,arr.email,arr.contactno,arr.Gender)}>
                <i className="material-icons" ></i>
              </a>
              <a
                href=""
                className="delete"
                title="Delete"
                data-toggle="tooltip"
              >
                <i className="material-icons" onClick={()=>this.Deletehandler(arr.userid)}></i>
              </a>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    
    </div>
  </div>
  <div id="addEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Update User</h4>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" value={this.state.name} required onChange={this.handlechange1} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" value={this.state.email} required onChange={this.handlechange1} />
          </div>
          <div className="form-group">
            <label>Contactno</label>
            <textarea className="form-control" name="contactno" required  value={this.state.contactno} onChange={this.handlechange1}/>
          </div>
          <div className="form-group">
            <label>Gender(M or F)</label>
            <input type="text" name="Gender" className="form-control" value={this.state.Gender} required onChange={this.handlechange1} />
          </div>
        </div>
    
        <div className="modal-footer">
          <input
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
            defaultValue="Cancel"

          />
          <input type="submit" className="btn btn-success" defaultValue="Add" onClick={this.UpdateHandler}/>
        </div>
      </form>
    </div>
  </div>
</div>;
            </div>
        )
    }
}
export default withRouter(Admin_users)
