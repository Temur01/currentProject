import React from 'react';
import "./SecondInputs.css";
import {NavLink} from "react-router-dom";
function SecondInputs(props) {
    return (
        <div className="container">
           <div className="row my-5 places">
               <div className="col-6">
                   <input type="text" placeholder={"Mahsulot rasmi"} className={"w-100 px-4 py-2 "}/>

               </div>
               <div className="col-6">
                   <input type="text" placeholder={"Mahsulot nomi"} className={"w-100 px-4 py-2 "}/>

               </div>
               <div className="col-6">
                   <input type="text" placeholder={"Mahsulot narxi"} className={"w-100 px-4 py-2 my-3 "}/>

               </div>

           </div> 
          <div className={"row mt-5 editor"}>

                  <div className="col-6 btnFirst">
                      <NavLink to={"/"}>
                      <button className={"btn py-2 px-4"}>Ortga qaytish</button>
                      </NavLink>
                  </div>
              <div className="col-6">
                  <button className={"btn py-2 px-4"}>Saqlash</button>
              </div>
          </div>
        </div>
    );
}

export default SecondInputs;