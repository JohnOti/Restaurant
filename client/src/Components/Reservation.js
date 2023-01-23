import React from "react";

const Reservation = ( {handleChange, submitResDetails, reservation} ) => {

        return (
          <div className="make-reservation">
            <h2>Make Reservation</h2>
            <form
              onSubmit={submitResDetails}
              className="make-reservation"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <label>Date</label>
              <input
                className="inputs"
                type="date"
                required
                min="2023-01-19"
                name="date"
                value={reservation.date}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />
              <label>Time</label>
              <input
                className="inputs"
                type="time"
                required
                name="time"
                value={reservation.time}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />
              <label>Number Of People</label>
              <input
                className="inputs"
                type="number"
                required
                min="1"
                name="no_of_seats"
                value={reservation.no_of_seats}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />
              <button
                type="submit"
                className="btn-res"
                onClick={() => alert("request sent")}
              >
                Confirm
              </button>
            </form>
          </div>
        );
}

export default Reservation;