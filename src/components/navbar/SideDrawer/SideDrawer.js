import React from 'react';
import './SideDrawer.css';
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>

        <div class="doubling stackable ui menu">

              <div class="item" >
                <img src="plogo.jpg" /> 
                <h2>CrazzyParking</h2>
              </div>
              <div class="item" >
                <p>Welcome Giest</p>
              </div>

              <div class="left item" >
                <Link to="/" >Login</Link>
              </div>
              <div class="right item" >
                <Link to="/" >Sign Up</Link>
              </div>
              
          
              <div class="item" >
                <Link to="/" ><b>Home</b></Link>
              </div>

              <div class="item">
                <Link to="/products"><b>Products</b></Link>
              </div>

              <div class="item">
                <Link to="/sector" ><b>Sectors</b></Link>
              </div>
              <div class="item">
                <Link to="/aboutus"><b>About Us</b></Link>
              </div>
              <div class="item">
                <Link to="/contactus" ><b>Contact Us</b></Link>
              </div>

              <div class="item">
                <i className="search icon" ></i> <input type="text" placeholder="Search your Brands" />
              </div>
    
              <div class="item">
                <Link to="/#"><i className="mail big icon"></i></Link>
                <Link to="/#"><i className="facebook big icon"></i></Link>
                <Link to="/#"><i className="twitter big icon"></i></Link>
                <Link to="/#"><i className="linkedin big icon"></i></Link>
                <Link to="/#"><i className="instagram big icon"></i></Link>
              </div>
         
          
          </div>
  










    </nav>
  );
};

export default sideDrawer;
