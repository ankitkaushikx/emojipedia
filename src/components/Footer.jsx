import React from "react";

function Footer(props) {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="copyright">
        All Rights Reserved by {props.brandname}.{year}{" "}
      </p>
      <div className="social-links">
        <a href="https://github.com/ankitkaushikx" target="_blank" rel="noopener noreferrer">
          <img src="/assests/icons/github.svg" alt="GitHub" width="30" height="30" />
          <br></br> ankitkaushikx
        </a>
      </div>
    </div>
  );
}

export default Footer;
