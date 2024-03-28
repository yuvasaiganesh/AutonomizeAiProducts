import { Link,useNavigate} from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "./index.css"
const Home = () => {
  
  const Navigate=useNavigate()
  
   const token=Cookies.get("jwt_token")
   useEffect(() => {
    if(!token){
      Navigate("/login")
    }
  });

  
 const toLogout=()=>{
  Cookies.remove('jwt_token')
  Navigate("/login")
 }

    return (<div className="homeSection">
         
      <h1>Welcome to our Store!</h1>
      <p className="para">Best shoppy platform for customers to get their desired products in budget</p>
      
       
          
          <button><Link to="/products">Products</Link></button>
          <button class="logout" onClick={toLogout}>LogOut</button>
        
      

    </div>)
    

};
  export default Home