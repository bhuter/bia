import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full p-5 bg-slate-200">
      <div className="container" id="container">
        <div className="fore">
          <h1>DROP US A LINE</h1>
          <p>- We would like to hear fom you</p>
        </div>
        <div className="col-1">
          <div className="c-col">
            <div className="loc-col">
              <h4>ADDRESS</h4>
              <div className="row">
                <div className="data">
                  <i className="bi bi-telephone icon"></i>
                  <div className="text"> +250788282252</div>
                </div>
                <div className="data">
                  <i className="bi bi-at icon"></i>
                  <div className="text"> info@biarwanda.com</div>
                </div>
                <div className="data">
                  <i className="bi bi-geo-alt icon"></i>
                  <div className="text">
                    <ul typeof="circle">
                    <li> - Giporoso Remera, SareMatoro, Kigali RW</li>
                    <li> - Youth center, Muhoza sector Opposite Musanze Justice Court</li>
                   </ul>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-col">
            <div className="error"></div>
            <div className="field-row">
              <div className="inputs">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full names"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="text">
                <textarea
                  name=""
                  id="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="submit">
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="follow-col">
          <h4>Follow Us</h4>
          <div className="row-2">
            <Link href="">
              <i className="bi bi-twitter icon"></i>
            </Link>
            <Link href="">
              <i className="bi bi-whatsapp icon"></i>
            </Link>
            <Link href="">
              <i className="bi bi-linkedin icon"></i>
            </Link>
            <Link href="">
              <i className="bi bi-instagram icon"></i>
            </Link>
            <Link href="">
              <i className="bi bi-facebook icon"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="col">
          <div className="logo">
            {/** image logo */}
            <Image
              src="/imgs/logo.ico"
              width={40}
              height={40}
              alt="Logo"
              layout="contain"
            ></Image>
          </div>
          <span>&copy; Copyright 2024. All rights reserved</span>
        </div>
      </div>
      <button className="back-to-top">
        <div className="bi bi-chevron-up"></div>
      </button>
    </footer>
  );
};
export default Footer;
