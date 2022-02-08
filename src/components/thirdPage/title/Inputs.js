import React, {useState} from 'react';
import "./input.css";
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";
function Inputs({setCard}) {
    const { register, handleSubmit } = useForm();

    function submit(data){
        setCard((item) => {
            return [...item,data ]
        })

    }
    return (
  <div className={"container type"}>
      <form onSubmit={handleSubmit(submit)}>
      <div className="row my-5">
          <div className="col-6 text-center">
              <input {...register("image")} className={"w-100  px-4 py-3"} placeholder="Yangi rasm" />
          </div>
          <div className={"col-6 "}>
              <input {...register("title")} className={"w-100  px-4 py-3"} placeholder="Yangi nomi" />
          </div>
          <div className="col-6 text-center">
              <input {...register("price")} className={"w-100 my-3 px-4 py-3"} placeholder="Yangi narxi" />
          </div>
      </div>

      <div className={"row mt-5 editor"}>

          <div className="col-6 btnFirst">
              <NavLink to={"/"}>
                  <button type={"button"} className={"btn py-2 px-4"}>Ortga qaytish</button>
              </NavLink>
          </div>

          <div className="col-6">
              <button type={"submit"} className={"btn py-2 px-4"}>Saqlash</button>
          </div>
      </div>
      </form>
  </div>
    )
}

export default Inputs;