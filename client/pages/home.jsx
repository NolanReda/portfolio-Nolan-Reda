import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Email'
    };
    this.showEmail = this.showEmail.bind(this);
  }

  showEmail(event) {
    if (this.state.email === 'Email') {
      this.setState({ email: 'nolan.reda@gmail.com' });
    }
    if (this.state.email === 'nolan.reda@gmail.com') {
      this.setState({ email: 'Email' });
    }
  }

  render() {
    const { email } = this.state;
    return (
      <main className=''>
        <div id='intro-box' className='intro-box d-flex'>
          <div className='mt-5 text-center hello-nolan'>
            <div className='line' />
            <div id='name' className='name'>
              <p className='text-size text-monospace text-left'>Nolan Reda<br /> Software Developer</p>
            </div>
            <div id='about me' className='about-me'>
              <p className='font-s text-left text-monospace'>
                I&apos;m Nolan Reda, A.S. in busisness administration, and software developer.<br />
                I enjoy software developement because it has given me pathways into joining my creativity<br />
                and my desire to create functional utilities that come to life inside the browser.<br />
                I came to become interested in developement during my time in college while taking computer information systems
                classes for my degree and I was introduced to HTML and CSS initially but that sparked a curiosity that would
                lead me to learning about JavaScript and eventually to attend a web developement bootcamp after graduating.
                Since attending and graduating LearningFuze, I have unlocked a passion for web developement that I never imagined myself<br />
                being a part of and I can not wait to lend my talents and skills to team that I can grow alongside of in the professional world.
              </p>
              <button id='resume' className='download btn btn-lg mt-4 btn-outline-primary'>
                <a className='resume text-monospace' href="resume/Nolan_Reda_Resume.pdf" download="Nolan_Reda_resume.pdf">Download My Resume</a>
              </button>
            </div>
          </div>
          <div className='personal-photo d-flex justify-content-center align-items-center mt-5' />
        </div>{/* end of top-box */}
        <div id='skills-box' className='skills-box d-flex mt-5' />
        <div id='technologies' className='technologies mb-5 text-center'>
          <div className='line-2' />
          <div className='col-half second-photo' />
          <div className='col-half'>
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

        </div>{/* end of technologies */}
        <div id='projects' className='projects'>
          <div className='text-center text-monospace text-size'>
            <p>Projects</p>
          </div>
          <div className='project-row justify-content-around'>
            <div className='project-wrapper'>
              <div className='project-head'>
                <a className='c-black' href="https://github.com/NolanReda/Looking-To-Play" target="_blank" rel="noreferrer">
                  <img className='git' src="img/techs/github.png" alt="" />
                  <p className='prj-link text-monospace'>visit repository</p>
                </a>
                <p className='prj-title text-center text-monospace d-inline-block ml-5'>Looking To Play</p>

              </div>
              <img className='ltp-img' src={window.screen.width < 450 ? 'img/proj/lookingtoplay-mobile.png' : 'img/proj/lookingtoplay-full.png'} alt="Looking to Play" />
              <div className='project-foot p-3'>
                <p className='text-center text-monospace'>A full-stack project built on a React for Counter Strike: Global Offensive players to find teammates in their region and skillgroup.</p>
                <div className='prj-tech-row text-center'>
                  <img className='ltp-tech ml-4' src="img/techs/JS.png" alt="JavaScript" />
                  <img className='ltp-tech' src="img/techs/css.png" alt="CSS" />
                  <img className='ltp-tech' src="img/techs/react.png" alt="React.js" />
                  <img className='ltp-tech' src="img/techs/Expressjs.png" alt="Expresss.js" />
                  <img className='ltp-tech' src="img/techs/bootstrap.png" alt="Bootstrap" />
                  <img className='ltp-tech' src="img/techs/node.png" alt="Node.js" />
                </div>
              </div>
            </div>
            <div className='project-wrapper'>
              <div className='project-head'>
                <a className='c-black' href="https://github.com/NolanReda/Pegasus-Deck-Builder" target="_blank" rel="noreferrer">
                  <img className='git' src="img/techs/github.png" alt="" />
                  <p className='prj-link text-monospace'>visit repository</p>
                </a>
                <p className='prj-title text-center text-monospace d-inline-block'>Pegasus Deck Builder</p>
              </div>
              <img className='pegasus-img' src={window.screen.width < 450 ? 'img/proj/pegasus-mobile.png' : 'img/proj/pegasus-full.png'} alt="Pegasus Deck Builder" />
              <div className='pegasus-foot'>
                <p className='text-center text-monospace'>A front-end project utilizing JavaScript AJAX for Yu-gi-oh players who want to build and save custom decks. </p>
                <div className='prj-tech-row text-center pt-3'>
                  <img className='ltp-tech ' src="img/techs/html.png" alt="JavaScript" />
                  <img className='ltp-tech ' src="img/techs/JS.png" alt="JavaScript" />
                  <img className='ltp-tech' src="img/techs/css.png" alt="CSS" />
                  <img className='ltp-tech' src="img/techs/ajax.png" alt="React.js" />
                </div>
              </div>

            </div>
          </div>

        </div>{/* end of projects */}
        <div id='contact' className='contact'>
          <div className='text-center text-monospace text-size'>
            <p className='text-white'>Contact Info</p>
          </div>
          <div className='d-flex'>
            <img className='con-img' src="img/Nolan---Circle.png" alt="" />
            <div className='col'>
              <a className='nav-item nav-link d-flex align-items-center text-white' href="https://linkedin.com/in/nolanreda/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <p className='con-link'>LinkedIn</p>
              </a>
              <a className='nav-item nav-link d-flex align-items-center text-white' href="https://github.com/NolanReda" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <p className='con-link'>Github</p>
              </a>
              <div onClick={this.showEmail} className='hand nav-link d-flex align-items-center text-white'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <p className='con-link'>{email}</p>
              </div>
            </div>
          </div>
        </div>{/* end of contacts */}
        <div className='bt-bar' />
      </main>
    );
  }

}
