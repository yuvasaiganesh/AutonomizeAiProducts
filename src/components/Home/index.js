import { Link } from "react-router-dom";
import "./index.css"
const Home = () => (
    <div className="homeSection">
         
      <h1>Welcome to our Store!</h1>
      <p className="para">Best shoppy platform for customers to get their desired products in budget</p>
      
       
          
          <button><Link to="/products">Products</Link></button>
        
      

    </div>
  );
  export default Home