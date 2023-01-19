import React, {useEffect, useState} from 'react';

const MyReservation = () => {
    const [ orders, setOrders ] = useState([])
    const [ resDetails, setResDetails ] = useState([])


    useEffect(()=>{
        fetch("/orders")
        .then(r=> r.json())
        .then(d=> setOrders(d))
        .catch(e=> console.log(e))
    }, [])

    useEffect(()=>{
        fetch("/reservations")
        .then(r=> r.json())
        .then(d=> setResDetails(d))
        .catch(e=> console.log(e))
    }, [])

    const details = resDetails.map(item => {

        return(
            <tr>
                <td>{restaurant[item.favorite_restaurant_id].name}</td>
                <td>
                    <select>
                        <option>Orderd Meals</option>
                        {item.orders.map(i => {
                            return(
                                <option>{i.meal}</option>
                            )
                        })}
                    </select>
                </td>
                <td>{item.orders.map(i=> i.price).reduce((a,b)=> a + b)}</td>
                <td>x</td>
            </tr>
        )
    })




    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <h2>Restaurant Name</h2>
                    </tr>
                    <tr>
                        <h2>Dish</h2>
                    </tr>
                    <tr>
                        <h2>Amount</h2>
                    </tr>
                    <tr>
                        <h2></h2>
                    </tr>
                </thead>
                <tbody>
                    {details}
                </tbody>
            </table>
            
        </div>
    );
}

export default MyReservation;
