import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.121018825103!2d86.43899201498253!3d23.814295284557886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20Of%20Technology%E2%80%93Dhanhbad%20(IIT%E2%80%93Dhanhbad)!5e0!3m2!1sen!2sin!4v1641752913582!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"Mail at given address to get my contact number."}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"rahulsthakur19@gmail.com"}
            text2={"rahulst19.19je0670@me.iitism.ac.in"}
            title={"Email"}
          />
          {/* <ContactItem
            icon={location}
            text1={"25 Paramount St, PN4 8H9 London"}
            text2={"United Kingdom"}
            title={"Address"}
          /> */}
        </div>
        <div className="icons">
          {/* <Link to="test" className="icon-holder">
            <FontAwesomeIcon icon={faFacebook} className="icon fb" />
          </Link> */}
          <a style={{ paddingRight: 20 }}>LINKS TO MY SOCIALS:-</a>
          <Link to="//github.com/Barrylimarti" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </Link>
          <Link
            to="//www.linkedin.com/in/rahul-singh-thakur-b92ba4157/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon yt" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
