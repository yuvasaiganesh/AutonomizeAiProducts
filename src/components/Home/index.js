import {  useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./index.css";
import { UserDetailsContext } from "../../Context";

const Home = () => {
  const [userdata, setuserdata] = useState([]);
  const user = useContext(UserDetailsContext);
  const Navigate = useNavigate();
  const token = Cookies.get("jwt_token");

 

  

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

      
          <Navbar/>
        <div className="secondSection">
        <div className="paraSection">
        <h1>Shoppy</h1>
     
        <p className="para">The best things in life are free – like our shipping!</p>
       
      </div>
      
      <img
        src="https://understandingtheology.org/wp-content/uploads/2022/10/mobile.jpg"
        className="homeImage"
        alt="website login"
      />
     
      
   </div>


        
      <div className="mensClothingSection">
        <h1>Clothing</h1>
        <Link to="/mensClothing">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.jGYFxiX-JthnUJMmN7r4WgHaMW?w=207&h=317&c=7&r=0&o=5&pid=1.7"
        className="homeImage"
        alt="website login"
      />
      </Link>
      <Link to="/womensClothing">
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.1Aef9KZxmbYR3814RGO_kAHaLH?pid=ImgDet&w=185&h=277&c=7"
        className="homeImage"
        alt="website login"
      />
      </Link>
      </div>
     
      
 

      <div className="mensClothingSection">
        <h1>Jewellwery</h1>
        <Link to="/jewellerry">
      <img
        src="https://simplecraftidea.com/wp-content/uploads/2018/12/1-58.jpg"
        className="homeImage"
        alt="website login"
      />
      </Link>
      <Link to="/jewellerry">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.eV9dto4D0NwX6UBXKNwNOgAAAA?pid=ImgDet&w=188&h=234&c=7"
        className="homeImage"
        alt="website login"
      />
      </Link>
      </div>
      


      <div className="mensClothingSection">
        <h1>Electronics</h1>
        <Link to="/electronics">
      <img
        src="https://rukmaplastics.com/wp-content/uploads/2023/08/multiple-household.jpg"
        className="homeImage"
        alt="website login"
      />
      </Link>
      <Link to="/electronics">
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.j_Z1AN-WJqoHgAMz5FdAeAHaL-?pid=ImgDet&w=185&h=298&c=7"
        className="homeImage"
        alt="website login"
      />
      </Link>
      </div>

      

    </div>
  );
};

export default Home;
