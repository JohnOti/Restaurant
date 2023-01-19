import React, {useState, useEffect} from "react";

const Reservation = ( {handleChange, submitResDetails, reservation} ) => {
    const [confirm, setConfirm] = useState("confirm")

    useEffect(()=>{})

    
    if(!confirm){
        setConfirm("confirmed")
    }

        return(
            <div >
                <meta></meta>
                <button
                onClick={()=> console.log("niaje")}
                >Back To Menu</button>
                <h2>Make Reservation</h2>
                <form onSubmit={submitResDetails}
                className="form-box"
                style={{ textAlign: "center", justifyContent: "center" }}>
                    <label>Date</label>
                    <input type="date"  required min="2023-01-19" name="date" value={reservation.date}  onChange={handleChange} style={{ marginBottom: "20px" }}/>
                    <label>Time</label>
                    <input type="time"  required name="time" value={reservation.time} onChange={handleChange} style={{ marginBottom: "20px" }}/>
                    <label>Number Of People</label>
                    <input type="number" required  min="1" name="no_of_seats" value={reservation.no_of_seats} onChange={handleChange} style={{ marginBottom: "20px" }}/>
                    <button type="submit" className="btn-res" onClick={()=> alert('request sent')}>{confirm}</button>
                </form>
            </div>
        )
}

export default Reservation;