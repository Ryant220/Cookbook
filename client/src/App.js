import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Recipes from './pages/Recipes'
import Add from './pages/Add'
import Recipe from './pages/Recipe'


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
