import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Header />}>
            <Route index element={ <Home />}/>
            <Route path='Cart' element={ <Cart />}/>
          </Route>
        </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
