import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const ContactCard = ({contact}) => {

  const {store, dispatch, deleteContact} =useGlobalReducer()
  const handledelete =() => {
    deleteContact({id:contact.id})
    window.location.reload()
  }
    return (
        <div className="card mx-2" style={{"width": "18rem"}}>
        <img src="" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.phone}</p>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.address}</p>
          <Link to={`/update/${contact.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
          <button className="btn btn-danger mx2" onClick={()=>handledelete()}><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
    );
}; 