import React from 'react';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className="nav-color navbar navbar-expand-lg navbar-light">
        <img className='nav-logo' src="img/Nolan-Logo.png" alt="" />
        {/* <a className="navbar-brand text-light" href="#">Nolan Reda</a> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active link-color" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link link-color" href="#resume">Resume</a>
            <a className="nav-item nav-link link-color" href="#projects">Projects</a>
            <a className='nav-item nav-link link-color' href="#test" >Test</a>
          </div>
        </div>
        <div className='mr-5'>
          <a href="https://github.com/NolanReda" target="_blank" rel="noreferrer">
            <img className='git' src="img/techs/github.png" alt="" />
          </a>
          <a href="https://linkedin.com/in/nolanreda/" target="_blank" rel="noreferrer">
            <img className='git' src="img/techs/linkedin.png" alt="" />
          </a>
        </div>
      </nav>
    );
  }
}
