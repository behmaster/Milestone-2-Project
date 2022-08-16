import ProductInfo from "./components/ProductInfo";
import ProductReview from "./components/ProductReview";

function ProductView() {


  return( 
  <div>

    //Product Photo
    //Name, Rating, Price, Colors, 'Add to Cart Button'
    <h1>{product_name}</h1>

{/* let rating = (
          <h3 className="inactive">
              Not yet rated
          </h3>
      )
      if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
          }, 0)
          let averageRating = Math.round(sumRatings / data.place.comments.length)
          let stars = ''
          for (let i = 0; i < averageRating; i++) {
              stars += '⭐️'
          }
          rating = (
            <h3>
              {stars} stars
            </h3>
          )
          } */}

    <h2>colors</h2>
    {colors} 
    <button>Add To Cart</button>

      <ProductInfo />
      <ProductReview />
  </div>
  )
}

export default ProductView;
