import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar'
import {Routes} from './routes'

function App() {
  return (
    <>
    <CssBaseline/>
      <BrowserRouter>
        <Navbar /> 
        {Routes.map(route => {
          return <Route {...route}/>
        })}
        
      </BrowserRouter>
    </>
  );
}

export default App;
