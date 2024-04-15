import "./index.css"
import React, { useState, useEffect, useContext } from 'react';
import { UserDetailsContext } from '../../Context';
import Navbar from "../Navbar";

const Cart = () => {
    const [cartitemsid, setCartItemsId] = useState([]);
    const [items , setItems]=useState([])
    const user = useContext(UserDetailsContext);
    

    const togetCartItemsId=async()=>{
      console.log(user)
        try{
        const response=await fetch(`https://fakestoreapi.com/carts/user/${user.user_id}`)
        if (!response.ok){
          throw new Error("network failure")
        }
        const data= await response.json()
       
        console.log(data)
        setCartItemsId(data)
        
      
       }
       catch(error){
         console.log(error.messeage)

       }
    }

const togetEachproduct= async(each)=>{
    
        
        try{
            const response= await fetch(`https://fakestoreapi.com/products/${each}`)
            if (!response.ok){
              throw new Error("network failure")
            }
            const data= await response.json()
           
            
            setItems((prev)=>
              [...prev, data]
            )
            
           console.log(data)
           }
           catch(error){
             console.log(error.messeage)
    
           }

    }


   
    const togetProductsinCart = () => {
        
        cartitemsid.forEach(each => {
            each.products.forEach(item => {
                togetEachproduct(item.productId);
            });
        });
    
        
       
    };
      
        

  
    useEffect(() => {
        
        togetCartItemsId(); 
        
        
},[]);

useEffect(() => {
        
    setItems([])
    togetProductsinCart();
    
},[cartitemsid]);

    
     
    
   
 
    return (
      <div className="cartSection" >
        <Navbar/>
        <h1 className="cartSectionHead">Cart Items</h1>
        {items.length>0 ?
        <div className="allcartItems">
        
        
        {items.map((product,index)=>{
            return(<div key={index} className="eachCartItem">
            <img className="eachImage" src={product.image} alt={product.title} />
            <div className="eachcartContent">
            <h2>{product.title}</h2>
           
            <button className="cartPrice">Price: ${product.price}</button>
            </div>
          </div>)
        })}
      </div>  : <h1>Loading...</h1>}
      </div>
    );
  };
  export default Cart 