import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider, useDispatch } from 'react-redux';

import store from './components/ReduxStore/Store';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';
import Signin from './components/pages/Signin';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/signin' element={<Signin />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
