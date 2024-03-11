
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

function App() {

  return (  
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
