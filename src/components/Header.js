import React from "react";

const Header = () => {


  return (
    <>
      <div id="head">
        <div className="head__top">
          <div className="logo">
            <img src="../ACV_logo.png" alt="logo" className="logo__img"></img>
            <div className="nav__head">
              <div className="nav__language">Tiếng Việt <i className="fas fa-caret-down"></i></div>
              <ul className="nav__list">
                <li className="nav__list-item">CHUYẾN BAY <i className="fas fa-caret-down"></i></li>
                <li className="nav__list-item">NHÀ GA HÀNH KHÁCH <i className="fas fa-caret-down"></i></li>
                <li className="nav__list-item">TIN TỨC <i className="fas fa-caret-down"></i></li>
                <li className="nav__list-item">VỀ CHÚNG TÔI <i className="fas fa-caret-down"></i></li>
                <li className="nav__list-item">CHẤT LƯỢNG DỊCH VỤ <i className="fas fa-caret-down"></i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="head__bg">
          <p className="head__context">Chuyến bay</p>
        </div>
      </div>

    </>
  );
};

export default Header;
