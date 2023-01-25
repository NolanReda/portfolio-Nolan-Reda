import React from 'react';
import Navbar from './pages/navbar';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  render() {
    return (
      <>
        <header className='mb-2 sticky-top'>
          <Navbar />
        </header>
        <main className=''>
          <div className='mt-5 mb-5 d-flex justify-content-center hello-nolan'>
            <p className='text-size text-monospace text-center'>Nolan Reda<br/> Software Developer</p>
          </div>
          <div className='personal-photo d-flex justify-content-center align-items-center'>
            <img src="img/nolan-reda.jpg" alt="Nolan Reda" />
          </div>
          <div className='about-me mt-5'>
            <p className='text-center text-monospace'>
              I&apos;m Nolan Reda, A.S. in busisness administration, and software developer.<br/>
              I enjoy software developement because it has given me pathways into joining my creativity<br />
              and my desire to create functional utilities that come to life inside the browser.<br />
            </p>
            <p className='text-center text-monospace' >
              I came to become interested during my time in college while taking computer information systems<br/>
              classes for my degree and I was introduced to HTML and CSS initially but that sparked a curiosity that would<br/>
              lead me to learning about JavaScript and eventually to attend a web developement bootcamp after graduating.
            </p>
            <p className='text-center text-monospace' >
              Since attending the program I have developed a few functional applications of my own design,<br/>
            </p>
          </div>
        </main>
      </>
    );
  }
}
