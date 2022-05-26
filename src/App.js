import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    /* <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Header />}>
            <Route path='Home' element={ <Home />}/>
            <Route path='Cart' element={ <Cart />}/>
          </Route>
        </Routes>
       </BrowserRouter>

    </div> */
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
        <Route path='/' element={ <Home />}>
          </Route>
          <Route path='Home' element={ <Home />}>
          </Route>
          <Route path='Cart' element={ <Cart />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
