import React from 'react';
import Navbar from './pages/navbar';
import parseRoute from './lib/parse-route';
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
    return (
      <>
        <header className='sticky-top'>
          <Navbar />
        </header>
        <PageContainer>
          { this.renderPage() }
        </PageContainer>
      </>

    );
  }
}
