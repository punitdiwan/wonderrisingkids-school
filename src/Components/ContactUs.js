import React from "react";
import "./css/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="container-fluid d-flex latest_card_box_ad p-0">
          <div className="contactleft map text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.8780300456324!2d75.852636014501!3d22.69558398511956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd62646323f1%3A0x82daa98ee435f961!2sWonder%20rising%20Kids%20school!5e0!3m2!1sen!2sin!4v1671799275212!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contactright text-left">
            <div className="titlecontact">
              <h4 className="ssss">School</h4>
              <hr />
              <p className="linkwrap">
                <b className="bbb">Phone:</b>{" "}
                <a className="linkwrap mnc" href="tel:+91  9826521034">
                  +91 9826521034
                </a>{" "}
                <a className="linkwrap mnc" href="tel:+91 8959570807">
                  +91  8959570807
                </a>
              </p>
              <p className="linkwrap">
                <b className="bbb">Phone:</b>{" "}
                <a className="linkwrap mnc" href="tel: 07314968978">
                  +91 07314968978
                </a>
              </p>

              <p className="linkwrap">
                <b className="bbb">Email:</b>{" "}
                <a
                  className="linkwrap mnc"
                  href="mailto: vishalkhilwani.wonderkids@gmail.com"
                >
                  vishalkhilwani.wonderkids@gmail.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
