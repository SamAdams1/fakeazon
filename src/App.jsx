import { useState } from 'react'
import './reset.css'
import './App.css'

// const options = {
//   method: 'GET',
//   url: 'https://amazon-data-scraper124.p.rapidapi.com/search/Nintendo%20Switch',
//   params: {
//     api_key: '3ba0325127417000e0b265200ab7ed34'
//   },
//   headers: {
//     'X-RapidAPI-Key': '314eca509fmsh14eb0792cb112dfp132576jsn6244027cc714',
//     'X-RapidAPI-Host': 'amazon-data-scraper124.p.rapidapi.com'
//   }
// };
const options ='https://dummyjson.com/products'

async function search(value){
  console.log(value)
  // options.params.search = value
  let data = await axios(options)
  console.log(value, data.data.products)
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
