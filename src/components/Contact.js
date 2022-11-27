import React from "react";

const Contact = () => {
  return (
    <>
      <iframe
        title="Mapa Leskovca"
        width="100%"
        height="95%"
        src="https://maps.google.com/maps?q=leskovac%20fina%20apartment&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <div className="phone">
        <a href="tel:0641227779">0641227779</a>
        <a href="tel:0643459545">0643459545</a>
      </div>
    </>
  );
};

export default Contact;
