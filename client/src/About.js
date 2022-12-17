import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function About() {
  return (
    <div>
      <div className="about">
        <div className="about-pri">
          <h1 id="top-about">Restaurant Services</h1>
          <h1 id="top-about">Real-time reservation agency</h1>
          <p id="p-top">
            A place where you can learn together and grow together as a
            community.
          </p>
          <div className="specs">
            <p id="spec">Book at high discounts</p>
            <p id="spec">Learn at the cost of $0</p>
            <p id="spec">From the best hostel industry</p>
          </div>
        </div>

        <div className="about-sec">
          <form className="forms-about">
            <div className="forms-about">
              <div className="inputfield">
                <input type="text" className="form-group" placeholder="Name" />
              </div>
              <div className="inputfield">
                <input
                  type="text"
                  className="form-group"
                  placeholder="Username"
                />
              </div>

              <div className="inputfield">
                <input
                  type="text"
                  className="form-group"
                  placeholder="Contacts"
                />
              </div>

              <div className="inputfield">
                <input
                  type="password"
                  className="form-group"
                  placeholder="Password"
                />
              </div>
              <div className="inputfield">
                <input
                  type="password"
                  className="form-group"
                  placeholder="Confirm Password"
                />
              </div>

              <br></br>
              <button className="btn-primary" type="submit">
                Register
              </button>
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
      <div className="sect-2">
        <h2 id="h2-about">Upcoming Projects</h2>
        <p id="p-about">
          To make the platform more interesting for diners and restaurateurs,You
          can rank restaurants based on
        </p>
        <p id="p-about">
          their creativity, hospitality, consistency, and of course diner’s
          reviews.
        </p>
        <div className="sec-divs">
          <div className="sec-div1" id="sec-div-us">
            <img
              src={require("./assets/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg")}
              id="image"
              height="400"
              alt="img"
            ></img>
            <h3>Darby West City Restaurant</h3>
            <p>
              <em>Tomates Farcies (Stuffed Tomatoes)</em>
            </p>
            <p>Between 4 p.m and 7 p.m</p>
          </div>
          <div className="sec-div2" id="sec-div-us">
            <img
              src={require("./assets/edward-franklin-Nb_Q-M3Cdzg-unsplash.jpg")}
              id="image"
              height="400"
              alt="img"
            ></img>
            <h3>Andy Lorainne Restaurant</h3>
            <p>
              <em>Steak frites</em>
            </p>
            <p>Between 8 a.m and 5 p.m</p>
          </div>
        </div>
      </div>
      <div className="sect-3">
        <h2 id="mid-about">Professional Services</h2>
        <h4 id="mid-about">Learn from the best in the industry and academia</h4>
        <div>
          <div className="lower-sect">
            <div className="lower-sect1" id="sect1">
              <FontAwesomeIcon icon="fa-light fa-calendar-check" />
              <h3>Booking</h3>
              <p id="p-desc">
                We accept online booking hassle-free 24/7. 55% people
                <br /> look outside business hours
              </p>
            </div>
            <div className="lower-sect1">
              <h3>Gift Cards</h3>
              <p id="p-desc">
                Gift Cards program to enable our customers to gift <br /> their
                loved one’s gift cards that they can use to dine at the best
                restaurants
              </p>
            </div>
          </div>
          <div className="lower-sect">
            <div className="lower-sect1" id="sect1">
              <h4>Contact Desk </h4>
              <p id="p-desc">
                Our appointment support system is fit for all service-based
                local businesses, multi-location enterprises, franchises, and
                more.
              </p>
            </div>
            <div className="lower-sect1">
              <h3>Rewards Program</h3>
              <p id="p-desc">
                Rewards points to customers on honoring a <br />
                reservation can later be used as gift cards or as discounts in
                future reservations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom1">
          <h2>All about reservations Banner</h2>
          <img
            src={require("./assets/Restaurant-online.png")}
            id="about-image"
            height="400"
            alt="img"
          ></img>
        </div>
        <div className="bottom2">
          <h2 id="bottom-header">
            Reserve anywhere,
            <br /> anytime
          </h2>
          <h4 id="bottom-p">
            <em>Brasserie Nairobi</em> highlights 50 one of a kind restaurants,
            open or coming soon, on the planet’s
            <br /> most alluring goals: dynamic significant urban areas,
            close-by airplane terminal
            <br /> entryways and in the most looked for after recreation
            hotspots.
          </h4>
          <button className="btn btn-primary">Join community</button>
        </div>
      </div>
    </div>
  );
}

export default About