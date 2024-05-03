import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import MyAlert from "../myAlert";
// import { myAlert } from "/src/components/myAlert";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logos">
          <div className="footer__logos-skilline">
            <Logo />
          </div>
          <div className="footer__virtual-class">Virtual Class for Zoom</div>
        </div>

        <form className="footer__forma" onSubmit={handleSubmit}>
          <div className="footer__forma-title">
            Subscribe to get our Newsletter
          </div>

          <div className="footer__forma-input-container">
            <input
              type="email"
              value={email}
              id="inputEmail"
              name="input-email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="footer__input"
              required
            />
            <button type="submit" className="footer__btn btn">
              Subscribe
            </button>
          </div>
        </form>
        <MyAlert
          showAlert={showAlert}
          message="You have successfully subscribed!"
          duration={3000}
          onClose={handleAlertClose}
        ></MyAlert>
        <div className="footer__ul">
          <div className="footer__li">
            <NavLink
              activeClassName="is-active"
              to="/careers"
              onClick={() => setIsHiden(false)}
            >
              Careers
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              activeClassName="is-active"
              to="/privacypolicy"
              onClick={() => setIsHiden(false)}
            >
              Privacy Policy
            </NavLink>
          </div>
          <div className="footer__li">
            <NavLink
              activeClassName="is-active"
              to="/termsandconditions"
              onClick={() => setIsHiden(false)}
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>

        <div className="footer__about">&copy; <span>{currentYear}</span> Class Technologies Inc.</div>
      </div>
    </footer>
  );
};
