import React from "react";
import "./card.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash,faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
function Cards({card}) {

    return <div className="container">
            <div className="row">
                {card.map((item, i) => (
                        <div className="col-lg-3 col-md-6 col-12 my-2" key={item.title}>
                           <div className="card">
                               <img  src={item.image} alt=""/>
                               <div className="card-body position-relative">
                                   <p className="card-text text-center fs-5 fw-bolder m-0">{item.title}</p>
                                   <p className="card-text text-center">{item.price}</p>
                                   <div className={"editors  position-absolute d-flex justify-content-center align-items-center gap-2"}>
                                       <NavLink to={"/third"}><FontAwesomeIcon className={"text-bolder fs-5 text-warning"} icon={faPlusCircle}/></NavLink>
                                       <FontAwesomeIcon className={"text-bolder text-danger fs-5"} icon={faTrash}/>
                                   </div>
                               </div>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    }
    export default Cards;