import React from "react";

const ArriverCard = (props) => {
    const { arriver } = props;

    return (
        <>
            {
                arriver ? (
                    <>
                        <li>
                            <ul className="list__item">
                                <li className="arriver__item">{arriver.departure.split('T')[1].split('.')[0]} / {arriver.arrival.split('T')[1].split('.')[0]}</li>
                                <li className="arriver__item item__long">{arriver.from}</li>
                                <li className="arriver__item">
                                    <img className="arriver__img" src={arriver.airline_img} alt=""></img>
                                </li>
                                <li className="arriver__item">{arriver.fight_no}</li>
                                <li className="arriver__item">{arriver.terminal}</li>
                                <li className="arriver__item">{arriver.airplane_type}</li>
                            </ul>
                        </li>
                    </>
                ) : <div></div>

            }

        </>
    )
}

export default ArriverCard;