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
          <div className='mt-5 d-flex justify-content-center hello-nolan'>
            <p className='text-size text-monospace text-center'>Nolan Reda<br/> Software Developer</p>
          </div>
          <div className='personal-photo d-flex justify-content-center align-items-center mb-5'>
            <img className='myself' src="img/nolan-reda.jpg" alt="Nolan Reda" />
          </div>
          <div className='about-me mt-5 mb-5'>
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
              Since attending and graduating LearningFuze, I have unlocked a passion for web developement that I never imagined myself<br/>
              being a part of and I can not wait to lend my talents and skills to team that I can grow alongside of in the professional world.
            </p>
          </div>
          <div className='technologies mb-5 text-center'>
            <div className='mt-5'>
              <p className='text-size text-monospace text-center'>Frontend Technologies</p>
            </div>
            <div className='frontend d-flex row justify-content-around mb-5'>
              <div className='tech-wrapper text-center'>
                <img className='tech-img' src="img/techs/html.png" alt="HTML" />
                <p className='text-center text-monospace font-weight-bold'>HTML</p>
              </div>
              <div className='tech-wrapper text-center'>
                <img className='tech-img text-center' src="img/techs/css.png" alt="CSS" />
                <p className='text-center text-monospace font-weight-bold'>CSS</p>
              </div>
              <div className='tech-wrapper text-center'>
                <img className='tech-img' src="img/techs/JS.png" alt="JavaScript" />
                <p className='text-center text-monospace'>JavaScrpit</p>
              </div>
              <div className='tech-wrapper text-center'>
                <img className='tech-img' src="img/techs/react.png" alt="React" />
                <p className='text-center text-monospace font-weight-bold'>React</p>
              </div>
              <div className='tech-wrapper text-center'>
                <img className='tech-img' src="img/techs/bootstrap.png" alt="Bootstrap" />
                <p className='text-center text-monospace font-weight-bold'>Booststrap</p>
              </div>

            </div>{/* end of frontend */}
            <div className='backend text-center'>
              <div className='mt-5'>
                <p className='text-size text-monospace text-center'>Backend Technologies</p>
              </div>
              <div className='frontend d-flex row justify-content-around mb-5'>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/node.png" alt="Node" />
                  <p className='text-center text-monospace font-weight-bold'>Node.js</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img ejs' src="img/techs/Expressjs.png" alt="Express" />
                  <p className='text-center text-monospace font-weight-bold'>Express.js</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img' src="img/techs/postgresql.png" alt="PostgreSQL" />
                  <p className='text-center text-monospace font-weight-bold'>PostgreSQL</p>
                </div>
              </div>
            </div>{/* end of backend */}
            <div className='other-tech text-center'>
              <div className='mt-5'>
                <p className='text-size text-monospace text-center'>Other Technologies & Tools</p>
              </div>
              <div className='frontend d-flex row justify-content-around mb-5'>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/github.png" alt="Github" />
                  <p className='text-center text-monospace font-weight-bold'>Github</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/git.png" alt="Git" />
                  <p className='text-center text-monospace font-weight-bold'>Git</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/figma.png" alt="Figma" />
                  <p className='text-center text-monospace font-weight-bold'>Figma</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/slack.png" alt="Slack" />
                  <p className='text-center text-monospace font-weight-bold'>Slack</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/dbdesign.png" alt="DBdesigner" />
                  <p className='text-center text-monospace font-weight-bold'>DBdesigner</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/httpie.png" alt="HTTPie" />
                  <p className='text-center text-monospace font-weight-bold'>HTTPie</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/ajax.png" alt="AJAX" />
                  <p className='text-center text-monospace font-weight-bold'>AJAX</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/chartjs.png" alt="Chart.js" />
                  <p className='text-center text-monospace font-weight-bold'>Chart.js</p>
                </div>
                <div className='tech-wrapper text-center'>
                  <img className='tech-img node' src="img/techs/npm.png" alt="Npm" />
                  <p className='text-center text-monospace font-weight-bold'>NPM</p>
                </div>
              </div>
            </div>{/* end of other */}
          </div>
        </main>
      </>
    );
  }
}
