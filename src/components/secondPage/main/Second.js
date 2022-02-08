import React from 'react';
import Header from "../../header/Header";
import SecondInputs from "../SecondTitle/SecondInputs";
import Title from "../../Info/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";


function Second(props) {
    return (
        <div>
            <Header />
            <div className="title">
                <p className="fs-3 mb-0 fw-bold text-center">Barchasini ko'rish/qo'shish/o'zgartirish/o'chirish paneli</p>
                <p className="bigTitle fw-normal text-center">O'zgartirish</p>
            </div>
            <SecondInputs />
        </div>
    );
}

export default Second;