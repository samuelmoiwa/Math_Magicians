import React, { PureComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line
import Calculator from './components/pages/Calculator';
import HeaderNav from './components/header';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import Footer from './components/pages/Footer';

class App extends PureComponent {
  // eslint-disable-next-line
  render() {
    return (
      <>
        <HeaderNav />

        <Routes className="App">
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        <Footer />
      </>
    );
  }
}

export default App;
