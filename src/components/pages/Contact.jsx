import React from "react";
import { Link } from "react-router-dom";
import LinkTo from "./MainPageFeatures/LinkTo";
import '../../assets/contact.css'
import email from "./MainPageFeatures/Icons/mail.png";
import phone from "./MainPageFeatures/Icons/telephone.png";
import freelancer from "./MainPageFeatures/Icons/freelancer.png";
import github from "./MainPageFeatures/Icons/github.png";
import instagram from "./MainPageFeatures/Icons/instagram.png";
import linkedin from "./MainPageFeatures/Icons/linkedin.png";
import twitter from "./MainPageFeatures/Icons/twitter.png";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-us">
        <h1>Contact Us</h1>

        <LinkTo
          img={email}
          theUrl={`mailto:vartanianrene5@gmail.com`}
          title={"Email"}
        />
        <LinkTo img={phone} theUrl={"tel:+37441300138"} title={"Phone"} />
      </div>

      <div>
        <h1>Keep in touch</h1>
        <LinkTo
          theUrl={"https://github.com/ReneViva"}
          title={"GitHub"}
          img={github}
        />
        <LinkTo
          theUrl={"https://twitter.com/ReneVartan39921"}
          title={"OG Twitter"}
          img={twitter}
        />
        <LinkTo
          theUrl={"https://www.instagram.com/rene8_v"}
          title={"Instagram"}
          img={instagram}
        />
        <LinkTo
          theUrl={"https://www.linkedin.com/in/rene-vartanian-31a385256"}
          title={"Linked In"}
          img={linkedin}
        />
      </div>

      <div>
        <h1>
          <img src={freelancer} alt="" />
          Freelancing in{" "}
        </h1>
        <LinkTo
          theUrl={"https://www.upwork.com/freelancers/~016300373a3c3d45a9"}
          title={"Upwork"}
        />
        <LinkTo
          theUrl={"https://www.fiverr.com/rene8_v?up_rollout=true"}
          title={"fiverr"}
        />
        <LinkTo
          theUrl={"https://www.freelancer.com/u/Rene8V"}
          title={"freelancer"}
        />
      </div>
    </div>
  );
}
