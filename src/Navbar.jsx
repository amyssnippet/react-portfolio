import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="mainnav">
        <div className="container-fluid">
          <Link className="navbar-brand" id='sitetitle' to="/">Amysnippet</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/aboutme">About Me</Link>
                <li className='nav-item'>
                  <Link className='nav-link active' to="/certificates">Certificates</Link>
                </li>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/services">Services</Link>
              </li>
              <li className='nav-item'><Link to='/hobbies' className='nav-link active'>Hobbies</Link></li>
              <li className='nav-item'>
                <Link className='nav-link active' to="/contact">Contact</Link>
              </li>
              <li className='nav-item'><Link to='/skills' className='nav-link active'>Skills</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
