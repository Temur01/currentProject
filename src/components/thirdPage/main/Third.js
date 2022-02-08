import React from 'react';
import Header from "../../header/Header";
import Inputs from "../title/Inputs";



function Third({setCard}) {
    return (
        <div>
            <Header />
            <div className="title">
                <p className="fs-3 mb-0 fw-bold text-center">Barchasini ko'rish/qo'shish/o'zgartirish/o'chirish paneli</p>
                <p className="bigTitle fw-normal text-center">Qo'shish</p>

            </div>
            <Inputs setCard={setCard} />
        </div>
    );
}

export default Third;