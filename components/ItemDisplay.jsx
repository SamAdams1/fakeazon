import ItemCard from '../components/ItemCard.jsx'
import React, { useEffect, useState } from 'react';


const options ='https://dummyjson.com/products'

// document.onload = getInventory();

const dummyData = [
  {title: "Fortnite", key: 1},
  {title: 'Apple', key: 2},
]


function ItemDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getInventory();
  }, []);

  async function getInventory() {
    try {
      let data = await axios(options)
      setData(data.data.products)
    } catch(error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className='itemGrid'>
      
      {data.map((itemDict) => (
        <ItemCard 
        title={itemDict.title}
        thumbnail={itemDict.thumbnail}
        price={itemDict.price}
        // brand={itemDict.brand}
        // stock={itemDict.stock}
        // rating={itemDict.rating}
        dict={itemDict}
        />
      ))}
    </div>
  )
}

export default ItemDisplay;