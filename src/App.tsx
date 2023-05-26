import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

export default class App extends Component {

  componentDidMount(): void {
    console.log("Hello World");
  }

  render(): React.ReactNode {
    return (
      <div className="min-h-screen">
        <Content/>
      </div>
    );
  }
 
}
