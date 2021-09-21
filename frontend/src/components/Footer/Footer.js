import React from "react";
import "./Footer.css";
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div className="footer">
      <p>{currentYear} Nightfury Hotel. Work in Progress</p>
    </div>
  );
}

export default Footer;
