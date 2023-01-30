import React from 'react';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className="nav-color navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand text-light" href="#">Nolan Reda</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active text-light" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link text-light" href="#resume">Resume</a>
            <a className="nav-item nav-link text-light" href="#projects">Projects</a>
            <a className='nav-item nav-link text-light' href="#test" >Test</a>
          </div>
        </div>
      </nav>
    );
  }
}
