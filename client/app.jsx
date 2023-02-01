import React from 'react';
import Navbar from './pages/navbar';
import parseRoute from './lib/parse-route';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
import Home from './pages/home';
import Test from './pages/test';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === '') {
      return <Home />;
    }
    if (path === 'test') {
      return <Test />;
    }
  }

  render() {
    const { route } = this.state;
    const contextValue = { route };
    return (
      <AppContext.Provider value={contextValue}>
        <header className='sticky-top'>
          <Navbar />
        </header>
        <PageContainer>
          { this.renderPage() }
        </PageContainer>
      </AppContext.Provider>
    );
  }
}
