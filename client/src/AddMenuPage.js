import React,{ useState} from "react";

const AddMenuPage = ({ menus, setMenus ,user }) => {
  const url = "http://localhost:3000/menus";

  const [AddMenuPage, setAddMenuPage] = useState({
    cuisine: "",
    price: "",
    image: "",
    favorite_restaurant_id:user.id,
    ingredients: "",
  });
  const handleChange = (e) => {
    setAddMenuPage({
      ...AddMenuPage,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully created")
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(AddMenuPage),
    })
      .then((response) => response.json())
      .then((data) => {
        const newData = [...menus, data];
        console.log(newData);
        setMenus(newData);
      });
    e.target.reset();
  };

  return (
    <div className="form_box">
      <h3 className="h3-form_box">Add a new menu</h3>
      <div className="menu-form">
        <form onSubmit={handleSubmit} className="menu-page">
          <label>Cuisine:</label>
          <br />
          <input
            className="inputs"
            type="text"
            placeholder="Enter Cuisine name"
            onChange={handleChange}
            name="cuisine"
            required
          />
          <br></br>
          <label>Price:</label>
          <br></br>
          <input
            className="inputs"
            type="text"
            placeholder="Enter value in KSH"
            onChange={handleChange}
            name="price"
            required
          />
          <br></br>
          {/* <label >Favourite restaurant Id:</label>
          <br></br>
          <input
            className="inputs"
            type="number"
            placeholder="Enter restaurant id"
            onChange={handleChange}
            name="id"
          /> */}
          <br></br>
          <label >Image:</label>
          <br></br>
          <input
            className="inputs"
            type="text"
            placeholder="image_url"
            onChange={handleChange}
            name="image"
            required
          />
          <br></br>

          <label >Ingredients:</label>
          <br></br>
          <input
            className="inputs"
            type="text"
            placeholder="list the ingredients"
            onChange={handleChange}
            name="ingredients"
            required
          />
          <br />
          <br />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenuPage;
