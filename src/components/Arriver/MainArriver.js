import React from "react";
import ArriverList from "./ListArriver";

const MainArriver = () => {
    return (
        <>
            <div className="container">
                <div className="container__header">
                    <div className="header__top">
                        <ul className="top__list">
                            <li className="top__item item__target">CHUYẾN ĐẾN</li>
                            <li className="top__item">CHUYẾN ĐI</li>
                        </ul>
                    </div>
                    <div className="header__bottom">
                        <ul className="bottom__list">
                            <li className="bottom__item">CHUYẾN ĐẾN <i className="fas fa-sharp fa-solid fa-caret-down"></i></li>
                            <li className="bottom__item bottom__input">
                                <input className="item__input" type="text" placeholder="CHUYẾN BAY/HÃNG/THÀNH PHỐ" />
                            </li>
                            <li className="bottom__item">13/APR/2023 <i className="fas fa-sharp fa-solid fa-caret-down"></i></li>
                            <li className="bottom__item">CẢ NGÀY <i className="fas fa-sharp fa-solid fa-caret-down"></i></li>
                            <li className="bottom__item">TẤT CẢ NHÀ GA <i className="fas fa-sharp fa-solid fa-caret-down"></i></li>
                            <li className="bottom__item">
                                <button className="item__btn">TÌM KIẾM</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="arriver__head">
                    <ul className="arriver__nav">
                        <li className="arriver__item">KẾ HOẠCH/DỰ KIẾN</li>
                        <li className="arriver__item item__long">TỪ</li>
                        <li className="arriver__item">HÃNG</li>
                        <li className="arriver__item">CHUYẾN BAY</li>
                        <li className="arriver__item">NHÀ GA</li>
                        <li className="arriver__item">TRẠNG THÁI</li>
                    </ul>
                </div>
                <ArriverList />
            </div>
        </>
    )

}

export default MainArriver;