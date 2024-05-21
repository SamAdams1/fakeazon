import { useState } from 'react'
import './reset.css'
import './App.css'
// hi
async function search(value){
  let data = await axios('https://dummyjson.com/products?limit=10&/search?q=' + value)
  console.log(data.data.products)
}

function App() {
  const [value, setValue] = useState("");
  let lastSearch;
  
  function handleSubmit(e){
    e.preventDefault();
    if (lastSearch != value){
      lastSearch = value;
      search(value);
    }
  }
  
  function handleChange(e){
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>Fakeazon</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onInput={handleChange}required />
        <button>Search</button>
      </form>
    </div>
  )
}

export default App
