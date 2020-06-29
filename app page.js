



 recycled closet 
More taste ,less waste -mimi 

 3 items
 links:

const styles = {
    text:{
       textAlign: "center",
    },
    shopImage:{
        display: "block",
         marginLeft: "auto",
         marginRight: "auto",
        width: "50%",
    }

    productimage:{
        width : "200px",
        height : "200px",
    }

    list:{
        alignItems:"center",
        justifyContent: "center",
        display: "flex",
    }

    product:{
        margin:"20px",
    }
};


function App() {
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
  <div style={styles.list}
     <div style = {styles.product}>
       <img src = "product1" alt="Dress"/>
       <p style= {styles.text}> an overlapback dress 100% recycled cotton</p>
       <p style= {styles.text}>25KD</P>
       style= {styles.productimage}
      </div>

     <div style = {styles.product}>
       <img src = "product2" alt="bag"/>
       <p style= {styles.text}>Orange Parachute Sling White Tape</p>
       <p style= {styles.text}>40KD</P>
       style= {styles.productimage}
      </div>
   
   

    </div>
   </div>