import React from "react";

function ContactItem({ icon, text1, text2, title }) {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <h6>{title}</h6>
          <p style={{ fontSize: 15, paddingBottom: 5, paddingTop: 5 }}>
            {text1}
          </p>
          <p style={{ fontSize: 15 }}>{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
