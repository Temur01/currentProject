import React, {useState} from 'react';
import "./product.css";
import Header from "../header/Header";
import Cards from "../cards/Cards.js"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle,faPenAlt} from "@fortawesome/free-solid-svg-icons";

import {NavLink} from "react-router-dom";
function Products({card}) {

    return (
        <div className="container">
        <Header />
            <div className="title">
                <p className="fs-3 mb-0 fw-bold text-center">Barchasini ko'rish/qo'shish/o'zgartirish/o'chirish paneli</p>
                <p className="bigTitle fw-normal text-center">Mahsulotlar</p>

                    <NavLink to={"/second"}>
                        <div className="text-center text-black"><FontAwesomeIcon className="fs-2 mt-3 mb-4" icon={faPenAlt}/>
                        </div>
                    </NavLink>

                </div>

       <Cards card={card}/>
        </div>
    );
}

export default Products;