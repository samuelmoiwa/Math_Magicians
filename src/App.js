import React, { PureComponent } from 'react';
// eslint-disable-next-line
import Calculator from './components/Calculator';

class App extends PureComponent {
  // eslint-disable-next-line
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
