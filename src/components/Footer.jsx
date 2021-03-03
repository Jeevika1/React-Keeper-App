import React from "react";
import ReactDOM from "react-dom";


function Footer()
{
  const currentYear = new Date().getFullYear();
  return(
    <Footer>
      <p>Copyright Ⓒ {currentYear}</p>
    </Footer>
  );


}

export default Footer;
