import React from 'react'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="foo">
          <div className="footer-rows">
            <h2 className="h-footer">Stay Connected</h2>
            <ul>
              <li>Help Centre</li>
              <li> Contact us</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="footer-rows">
            <h2 className="h-footer">Get More Info</h2>
            <ul>
              <li>Terms of use</li>
              <li>Privacy and Policy</li>
              <li>Overview</li>
            </ul>
          </div>
          <div className="footer-rows">
            <h2 className="h-footer">About us</h2>
            <p id="p-about">
              We have invested in meeting customer restaurant reservations to their satisfaction for a
              changing world.
              <br />
              our entire business can adapt to meet the needs of every distinct
              customer segment.
              <br /> - satisfied or not!
            </p>
          </div>
          <div className="footer-rows">
            <h2 className="h-footer">Address</h2>
            <address>
              <a href="location">map location</a>
              <p id="p-abouts">res.reservations@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="rights">
          <h4>2023 @reservefromus.com.All rights reserved</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer