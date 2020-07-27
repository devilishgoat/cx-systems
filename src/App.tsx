import React from 'react';
import './App.css';
import Navigation from './components/navigation'
import { Route } from 'react-router-dom';
import {Routes} from './routes'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navigation />
      </header>
      {Routes.map(r => {
        return <Route exact={r.exact} path={r.path} component={r.component} />
      })}      
    </div>
  );
}

export default App;
