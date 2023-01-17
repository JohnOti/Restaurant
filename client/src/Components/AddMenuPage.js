import React, { useState } from 'react';
// import {React,useState} from 'react'

const AddMenuPage = ({menus,setMenus}) => {

  const url= "/menus"
  
  const[AddMenuPage,setAddMenuPage]=useState({
    cuisine:"",
    price:"",
    image:"",
    ingredients:""
  });
  const handleChange = (e) => {
    setAddMenuPage({
      ...AddMenuPage,
      [e.target.name]: e.target.value,
    });
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AddMenuPage),
    })
      .then((respon) => respon.json())
      .then((data) => {
        
        const newData = [...menus, data];
        console.log(newData)
        setMenus(newData);
      });
    e.target.reset();
  };

  return (
    <div className="form_box">
      <h4>Add a new menu</h4>
      <form onSubmit={handleSubmit}>
         <label for="cuisine">Cuisine:</label><br></br>
          <input className="new_menu"type="text" placeholder='Enter Cuisine name' onChange={handleChange} name="cuisine"/><br></br>
          <label for="price">Price:</label><br></br>
          <input className="new_menu" type="text" placeholder='Enter value in KSH' onChange={handleChange} name="price"/><br></br>
           <label for="image">Image:</label><br></br>
            <input className="new_menu" type="text" placeholder='image_url' onChange={handleChange} name="image" /><br></br>
         
            <label for="ingredients">Ingredients:</label><br></br>
            <input className="new_menu" type="text" placeholder='list the ingredients'onChange={handleChange} name="ingredients" /><br></br>
          
          <button  type = "submit" className='btn01'>Submit</button>
      </form>
    </div>       
          
            
          

    

  )
}

export default AddMenuPage;