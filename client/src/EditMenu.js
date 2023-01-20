import React, {useState} from 'react'

function EditMenu({menudetails,menus, setMenus}) {
    const [menudata, setMenuData] = useState(menudetails);
    const { id } = menudata
    console.log(menudata)

    const handleChange = (e) => {
      setMenuData({
        ...menudata,
        [e.target.name]: e.target.value,
      });
    };
    
    const handleEdit = (e) => {
        e.preventDefault();
        alert("menu successfully updated")
        fetch(`http://localhost:3000/menus/${id}`, {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menudata),
        })
          .then((response) => response.json())
          .then((data) => {
            const newData = [...menus, data];
            console.log(newData);
            setMenus(newData);
          });
    }
  return (
    <div>
      <div className="form_box">
        <h3 className="h3-form_box">Edit menu</h3>
        <div className="menu-form">
          <form onSubmit={handleEdit} className="menu-page">
            <label>Cuisine:</label>
            <br />
            <input
              className="inputs"
              type="text"
              placeholder="Enter Cuisine name"
                          onChange={handleChange}
                          value={menudata.cuisine}
              name="cuisine"
              
            />
            <br></br>
            <label>Price:</label>
            <br></br>
            <input
              className="inputs"
              type="text"
                          placeholder="Enter value in KSH"
                          value={menudata.price}
              onChange={handleChange}
              name="price"
              
            />
            <br></br>
           
            <br></br>
            <label>Image:</label>
            <br></br>
            <input
              className="inputs"
              type="text"
              placeholder="image_url"
                          onChange={handleChange}
                          value={menudata.image}
              name="image"
              
            />
            <br></br>

            <label>Ingredients:</label>
            <br></br>
            <input
              className="inputs"
              type="text"
                          placeholder="list the ingredients"
                          value={menudata.ingredients}
              onChange={handleChange}
              name="ingredients"
              
            />
            <br />
            <br />
            <button type="submit" className="btn">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditMenu