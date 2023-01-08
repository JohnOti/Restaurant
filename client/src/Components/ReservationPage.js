import React from "react";
import { Route, useRouteMatch} from "react-router-dom"
import Menu from "./Menu";
import Reservation from "./Reservation";

const ReservationPage = ( filterByRestId, restaurant, handleMenu ) => {
    const match = useRouteMatch()
    // console.log(match)

    return(
        <div>
            <div style={{
                textAlign:"center"
            }}>
                <img src={filterByRestId.restaurant.image} alt={filterByRestId.restaurant.name} style={{
                        height:"300px",
                        width:"100%"
                    }}/>
                <h2> {filterByRestId.restaurant.name} </h2>
            </div>
            <div style={{
                display:"flex"
            }}>
                <Menu filterByRestId={filterByRestId} restaurant={restaurant} handleMenu={handleMenu} />
                <div>
                    <Route path={`${match.url}/:name`}>
                        <Reservation filterByRestId={filterByRestId} />
                    </Route>
                </div>
            </div>
        </div>
    )
}

export default ReservationPage;