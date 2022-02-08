import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import "./title.css"
function Title(props) {
    const  [name]=props;
    return (
        <div className={"container"}>
            <div className="title">
                <p className="fs-3 mb-0 fw-bold text-center">Barchasini ko'rish/qo'shish/o'zgartirish/o'chirish paneli</p>
                <p className="bigTitle fw-normal text-center">{name}</p>
                <div className="text-center">  <FontAwesomeIcon className="fs-3 mt-4 mb-5" icon={faPlusCircle}/></div>
            </div>
        </div>
    );
}

export default Title;