import React from "react";

const ArriverCard = (props) => {
    const { arriver } = props;

    return (
        <>
            <li>
                <ul className="list__item">
                    <li className="arriver__item">{arriver.departure.toString().split('T')[1].split('.')[0]} / {arriver.arrival.toString().split('T')[1].split('.')[0]}</li>
                    <li className="arriver__item item__long">{arriver.from}</li>
                    <li className="arriver__item">
                        <img className="arriver__img" src="http://noibaiairport.vn/Assets/images/logo_smis/VJ.jpg" alt=""></img>
                    </li>
                    <li className="arriver__item">{arriver.fight_no}</li>
                    <li className="arriver__item">{arriver.terminal_id}</li>
                    <li className="arriver__item">{arriver.airplane_type_id}</li>
                </ul>
            </li>
        </>
    )
}

export default ArriverCard;