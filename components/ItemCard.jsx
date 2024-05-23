import AddToCartBtn from "./AddToCartBtn";


function ItemCard({ dict }) {

  function showItem(){
    console.log(dict.id, dict.title)
  }

  return (
    <div className="itemCard" key={dict.id} onClick={showItem}>
      <h3>{dict.title}</h3>
      <img className="thumbnailImg" src={dict.thumbnail} alt="" />
      <h4>{dict.brand}</h4>
      <h4>${dict.price}</h4>
      <h4>Rating: {dict.rating}</h4>
      <h4>Stock: {dict.stock}</h4>
      <h4>{dict.shippingInformation}</h4>
      <AddToCartBtn />
    </div>
  )
}

export default ItemCard;