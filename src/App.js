import React, { Component } from 'react';
import './App.css';
import { Grid } from './components/Grid';


const data = [
  {
    title: 'papa',
    price: 500,
    image: ''
  },
  {
    title: 'pasta',
    price: 1500,
    image: ''
  },  {
    title: 'remolacha',
    price: 4500,
    image: ''
  },
  {
    title: 'tierra',
    price: 400,
    image: ''
  },
  {
    title: 'arepas',
    price: 250,
    image: ''
  }

]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>MERCAMPO</h1>
        </div>
        <p className="App-intro">
          <Grid data={data} />
        </p>
      </div>
    );
  }
}

export default App;
