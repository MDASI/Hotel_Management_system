import React from "react";

function Navbar() {
  function logout() {   
    localStorage.removeItem("currentUser");
    window.location.href = "/login";
  }
 
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          BFHL
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: "white" }}></i>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            
          {JSON.parse(localStorage.getItem("currentUser"))?.name=="admin" && JSON.parse(localStorage.getItem("currentUser"))?.name !==null ? (
              <div class="dropdown mr-5">
                <li class="nav-item active" style={{fontWeight:"bold",float:"left",borderRadius:"1.5rem",width:"6rem",height:"2.5rem",marginRight:"0.5rem",paddingTop:"0.1rem",paddingLeft:"0.7rem" ,backgroundColor:"#e72118"}}>
                  <a class="nav-link" href="/home">
                    Rooms
                  </a></li>
            <li class="nav-item active" style={{fontWeight:"bold",float:"left",borderRadius:"1.5rem",width:"7.5rem",height:"2.5rem",marginRight:"0.5rem",paddingTop:"0.1rem",paddingLeft:"0.7rem" ,backgroundColor:"#e72118"}}>
                    <a class="nav-link" href="/adminscreen">
                      adminpanel
                    </a>
                  </li>
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    style={{borderRadius:"1.5rem"}}
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-user" aria-hidden="true"></i>{" "}
                    {JSON.parse(localStorage.getItem("currentUser")).name}
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="/profile">
                      Profile
                    </a>
                    <a class="dropdown-item" href="#" onClick={logout}>
                      Logout
                    </a>
                  </div>
  
              </div>
            ):
          
            localStorage.getItem("currentUser") ? (
              <div class="dropdown mr-5">
                <button class="btn btn primary" style={{borderRadius:"1.5rem",width:"7rem",height:"2.5rem",marginRight:"1rem",paddingTop:"0.1rem",backgroundColor:"#e72118"}}>
                <li class="nav-item active" style={{fontWeight:"bold",float:"left"}}>
                  <a class="nav-link" href="/home">
                    Rooms
                  </a>
                </li></button>
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  style={{borderRadius:"1.5rem"}}
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-user" aria-hidden="true"></i>{" "}
                  {JSON.parse(localStorage.getItem("currentUser")).name}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a class="dropdown-item" href="#" onClick={logout}>
                    Logout
                  </a>
                </div>
              </div>
            ) :
              (
              <>
              <button  style={{borderRadius:"1.5rem",width:"7rem",height:"2.5rem",marginRight:"1rem",paddingTop:"0.0rem",backgroundColor:"#e72118"}}>
              <li type="button" class="nav-item active" style={{fontWeight:"bold"}}>
                  <a class="nav-link" href="/home">
                    Rooms
                  </a>
                </li></button>
                <button  style={{borderRadius:"1.5rem",width:"7rem",height:"2.5rem",marginRight:"1rem",paddingTop:"0.0rem",backgroundColor:"#e72118"}}>
                <li class="nav-item active" style={{fontWeight:"bold"}}>
                  <a class="nav-link" href="/register">
                    Register
                  </a>
                </li></button>
                <button  style={{borderRadius:"1.5rem",width:"7rem",height:"2.5rem",marginRight:"1rem",paddingTop:"0.0rem",backgroundColor:"#e72118"}}>
                <li class="nav-item" style={{fontWeight:"bold"}}>
                  <a class="nav-link" href="/login">
                    Login
                  </a></li></button>
                  <button  style={{borderRadius:"1.5rem",width:"7rem",height:"2.5rem",marginRight:"1rem",paddingTop:"0.00rem" ,backgroundColor:"#e72118"}}>
                  <li class="nav-item" style={{fontWeight:"bold"}}>
                  <a class="nav-link" href="/admin">
                    Admin
                  </a>
                </li></button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
