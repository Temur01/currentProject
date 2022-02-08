import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPen, faSearch} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.css";


function Header(props) {
    return (

            <div className="container d-flex align-items-center justify-content-between my-2">
                <p className="furniture fw-bold ">Furniture.</p>
                <FontAwesomeIcon icon={faSearch} className="fs-5" />
            </div>

    );
}

export default Header;