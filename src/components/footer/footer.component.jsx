import { useNavigate } from "react-router-dom";

import "./footer.style.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12 footer-left">
            <h5 className="black-text">Footer Content</h5>
            <p className="black-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="black-text">Links</h5>
            <ul>
              <li>
                <p
                  className="black-text text-lighten-3"
                  onClick={() => navigate("/beans")}
                >
                  Coffee Beans
                </p>
              </li>
              <li>
                <p
                  className="black-text text-lighten-3"
                  onClick={() => navigate("/drinks")}
                >
                  Coffee Drinks
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="container">--- Zheng Zhang CS601 ---</p>
      </div>
    </footer>
  );
};

export default Footer;
