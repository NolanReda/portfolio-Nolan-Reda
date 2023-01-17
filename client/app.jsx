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
        <header>
          <Navbar />
        </header>
        <main>
          <div>
            <h1>Hello, World! I&apos;m Nolan</h1>
          </div>
          <img src="" alt="" />
        </main>
      </>
    );
  }
}
