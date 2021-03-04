import React from "react";

function Footer()
{

  const currentYear = new Date().getFullYear();
  return(
  // eslint-disable-next-line
      <p className="footer">Copyright Ⓒ {currentYear} </p>
  );
}

export default Footer;
