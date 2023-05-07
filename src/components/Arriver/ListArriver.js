import React from "react";
import ArriverCard from "./ArriverCard";
import fights from "../../data/fightData";

const ArriverList = () => {
    return (
        <>
            <div className="arriver__container">
                <ul className="arriver__list">
                    {
                        fights.map((arriver) => (
                            <ArriverCard arriver = {arriver}/>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default ArriverList;