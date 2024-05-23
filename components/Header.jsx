import { useState } from 'react'

async function search(value){

}

function Header() {
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

export default Header;