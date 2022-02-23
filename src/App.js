import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './components/ReduxStore/Store';
import Home from './components/pages/Home';
import NavBar from './components/layout/NavBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
