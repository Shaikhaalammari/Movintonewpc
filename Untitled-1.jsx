
 //recycled closet 
//More taste ,less waste -mimi 

 //3 items
 //links:


 // t7t import react nktb hatha
 //Data
 import products from "./products"
///////////// 
// styles
import styles from "./styles"

function App() {
const productsList = products.map(product)=> (
<div style={styles.list} key={products.id}>
style = {styles.product}>
 <img src ={product.image} alt={products[0].name}/>
 <p style= {styles.text}> {product.name}</p>
 <p style= {styles.text}>{product.price} KD</P>
 style= {styles.productimage}
</div>)
    return (
    <div>
      <div>
         <h1 style= {styles.text}>Recycled Closet</h1>
         <h4 style={styles.text}>More Taste, Less Waste - MiMi</h4>
         <img alt="recycled closet"
         src="logo-rec.jpg"
         alt="logo of the website"
         style={styles.shopImage}
          />
    
      </div>
      
      <div style={styles.list}>{productsList}</div>
   

    </div>