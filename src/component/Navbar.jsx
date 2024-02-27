import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {  
  const navigate = useNavigate();
  
  const handleNavigation = (path) =>{
    navigate(path);
  };
  
    return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div class="container">
       
        <NavLink to="/" className="navbar-brand fw-bold fs-4" onClick={() => handleNavigation("/")}>
  Collection-Be
</NavLink>

     
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <button class="nav-link btn"
                onClick={() => handleNavigation("/")}
               >
                  Home
                </button>
              </li>
              <li class="nav-item">
                <button
                 class="nav-link"
                 onClick={() => handleNavigation("/products")}
                 >
                  Product      
                            </button>
              </li>
              {/* ...other navigation buttons... */}
            </ul>
            <div className="buttons">
              <button 
              onClick={() => handleNavigation("/login")}
              to="" className="btn btn-outline-dark">
                <li className="fa fa-sign-in me-1"></li>Login
              </button>
              <button onClick={() => handleNavigation("/register")}
               className="btn btn-outline-dark ms-2">
                <li className="fa fa-user-plus me-1"></li>Register
              </button>
              <button onClick={() => handleNavigation("/cart")}
               className="btn btn-outline-dark ms-2">
                <li className="fa fa-cart-plus me-1"></li>Cart
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
