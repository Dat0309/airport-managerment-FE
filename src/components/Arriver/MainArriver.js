import React, { useEffect, useState } from "react";
import ArriverList from "./ListArriver";
import { useDispatch, useSelector } from "react-redux";
import { listFlight } from "../../Redux/Actions/FightAction";
import Loading from "../LoaddingError/Loading";
import Message from "../LoaddingError/Error";
import airplanetypes from "../../data/airPlaneTypeData";

const MainArriver = () => {
    const dispatch = useDispatch();

    const [airplane, setAirplane] = useState("645731f7307b6fbda26ffac0");

    const [activeIndex, setActiveIndex] = useState(null);

    const flightList = useSelector((state) => state.listFlight);
    const { loading, error, flight } = flightList;

    const handleChange = (index, id) => {
        setActiveIndex(index);
        setAirplane(id);
    }

    useEffect(() => {
        dispatch(listFlight(airplane));
    }, [dispatch, airplane])
    return (
        <>
            <div className="container">
                <div className="container__header">
                    <div className="header__top">
                        <ul className="top__list">
                            {
                                airplanetypes.map((item, index) => (
                                    <li key={index} onClick={() =>handleChange(index, item.id)} className={activeIndex === index ? 'top__item item__target' : 'top__item'}>
                                        {item.name}
                                    </li>
                                ))
                            }
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
                {loading ? (
                    <Loading />
                )
                    : error ? (
                        <Message variant="alert-danger">{error}</Message>
                    ) : (
                        <ArriverList arriver={flight} />
                    )
                }
            </div>
        </>
    )

}

export default MainArriver;