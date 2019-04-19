import React from 'react';


class Header extends React.Component {
  
  render() {
    
    return (
      <div className="container-fluid">
      <div className="header d-lg-flex justify-content-between align-items-center py-3 px-sm-3">
        {/* logo */}
        <div id="logo">
          <h1><a href="/home"><span className="fa fa-linode mr-2" />Startup</a></h1>
        </div>
        {/* //logo */}
        {/* nav */}
        <div className="nav_w3ls">
          <nav>
            <label htmlFor="drop" className="toggle">Menu</label>
            <input type="checkbox" id="drop" />
            <ul className="menu">
              <li><a href="/home" className="active">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/signin">Sign In/Up</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/price">Price</a></li>
              <li><a href="/profile">Profile</a></li>
              <li>
                {/* First Tier Drop Down */}
                <label htmlFor="drop-2" className="toggle toogle-2">Dropdown <span className="fa fa-angle-down" aria-hidden="true" />
                </label>
                <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /></a>
                <input type="checkbox" id="drop-2" />
                <ul>
                  <li><a href="#services" className="drop-text">Services</a></li>
                  <li><a href="faq.html" className="drop-text">Faq's</a></li>
                  <li><a href="404.html" className="drop-text">404</a></li>
                  <li><a href="#stats" className="drop-text">Statistics</a></li>
                  <li><a href="about.html" className="drop-text">Why Choose Us?</a></li>
                  <li><a href="about.html" className="drop-text">Our Team</a></li>
                  <li><a href="#partners" className="drop-text">Partners</a></li>
                </ul>
              </li>
              
            </ul>
          </nav>
        </div>
        {/* //nav */}
    
      </div>
    </div>
    );
  }

  onSelect() {}

}

export default Header;
