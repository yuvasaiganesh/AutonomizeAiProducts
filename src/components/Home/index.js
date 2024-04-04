import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { UserDetailsContext } from "../../Context";

const Home = () => {
  const [userdata, setuserdata] = useState([]);
  const user = useContext(UserDetailsContext);
  const Navigate = useNavigate();
  const token = Cookies.get("jwt_token");

 

  const toLogout = () => {
    Cookies.remove("jwt_token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    Navigate("/login");
  };

  const tomatchUser = () => {
    try {
      console.log("User Data:", userdata);
      
      console.log("Logged-in User:", user);
      const response = userdata.filter(each => each.username === user.user_name);
      console.log("Filtered Response:", response);
      if (response) {
        console.log(response[0].id);
        localStorage.setItem("userId", response[0].id);
        user.update_user_id()
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const togetUser = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/users");
      if (!response.ok) {
        throw new Error("Network failure");
      }
      const data = await response.json();
      console.log(data);
       setuserdata(data); 
      
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    } 
    else{
      togetUser();
    }
   
  }, []);

  useEffect(() => {
    tomatchUser(); 
  }, [userdata]);



  return (
    <div className="homeSection">

      <div className="navSection">
      <Link to="/" className="navButton">
          <button>Home</button>
        </Link>

        <Link to="/products" className="navButton">
          <button>Products</button>
        </Link>
      
        <Link to="/cart" className="navButton">
          <button>Cart</button>
        </Link>
      <div className="navButton">
        <button  onClick={toLogout}>
          LogOut
        </button>
        </div>
        </div>

        <div className="secondSection">
        <div className="paraSection">
        <h1>Shoppy</h1>
     
        <p className="para">The best things in life are free – like our shipping!</p>
       
      </div>
      
      <img
        src="https://understandingtheology.org/wp-content/uploads/2022/10/mobile.jpg"
        className="homeImage1"
        alt="website login"
      />

<img
        src="https://socital.com/wp-content/uploads/2020/10/thumbnail-11-tactics-1.jpg"
        className="homeImage2"
        alt="website login"
      />
   </div>
    </div>
  );
};

export default Home;
