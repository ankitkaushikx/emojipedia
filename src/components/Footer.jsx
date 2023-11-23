import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      <p className="copyright">All Rights Reserved by {props.brandname}.</p>
    </div>
  );
}

export default Footer;
