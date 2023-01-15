import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const initialState = {
  favorite_restaurant: null,
  error: null,
  status: "pending",
};


function Adminviews() {

    const { id } = useParams();
    const [{ favorite_restaurant, error, status }, setState] = useState(initialState);

    useEffect(() => {

        setState(initialState);
        fetch(`/favorite_restaurants/${id}`)
            .then((r) => {
          if (r.ok) {
              r.json()
                  .then((favorite_restaurant) =>
                    //   console.log(favorite_restaurant)
                      setState({ favorite_restaurant, error: null, status: "null" })
            );
          } else {
            r.json().then((message) =>
              setState({
                favorite_restaurant: null,
                error: message.error,
                status: "pending",
              })
            );
          }
        });
    }, [id]);

    if (status === "pending") return <h1>Loading...</h1>;

    const { name, image, location_id, menu } = favorite_restaurant;

  return (
    <div>
      <h1>Adminviews</h1>
      <h1>{name}</h1>
      <small>
        <p>
          {image} •{location_id} coordinates
        </p>
        <p>
            <em>{ menu }</em>
        </p>
      </small>
    </div>
  );
}

export default Adminviews