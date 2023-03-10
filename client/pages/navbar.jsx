import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Navbar extends React.Component {
  render() {

    return (
      <nav className="nav-color navbar navbar-expand-lg navbar-light">
        <img className='nav-logo' src="img/Nolan-Logo.png" alt="" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active link-color" href="#">Hello<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link link-color" href="#resume">Resume</a>
            <a className="nav-item nav-link link-color" href="#projects">Projects</a>
          </div>
        </div>
        <div className='nav-socials'>
          <a className='mr-2 link-color' href="https://github.com/NolanReda" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a className='link-color' href="https://linkedin.com/in/nolanreda/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </nav>
    );
  }
}
