import ProductInfo from "./components/ProductInfo";
import ProductReview from "./components/ProductReview";

function ProductView() {


  return( 
  <div>

    //Product Photo
    //Name, Rating, Price, Colors, 'Add to Cart Button'
    <h1>{product_name}</h1>

    <h2>colors</h2>
    {colors} 
    <button>Add To Cart</button>

      <ProductInfo />
      <ProductReview />
  </div>
  )
}

export default ProductView;
