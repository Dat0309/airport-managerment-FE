import React from "react";
import ArriverCard from "./ArriverCard";

const ArriverList = (props) => {
    const {arriver} = props;

    return (
        <>
            <div className="arriver__container">
                <ul className="arriver__list">
                    {
                        arriver.map((flight) => (
                            <ArriverCard arriver={flight}/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default ArriverList;