
import SearchBar from './components/searchBar';

function App() {

  // for search bar
  const data = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];

  return (  
    <div>

      <h1>Taylor Family Cookbook</h1>

      <h1>Search Example</h1>
      <SearchBar placeholder="Search fruits..." data={data} />
    </div>
  );
}

export default App;
