import React, { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard.jsx";

export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const { store, dispatch, fetchAgenda } = useGlobalReducer()

  useEffect(() => {
    fetchAgenda(dispatch)
  }, [])

  useEffect(() => {
    console.log(store.contacts)
    setContacts(store.contacts)
  }, [store.contacts])


  return (
    // <div className="text-center mt-5 d-flex justify-content-center">

    <ul className="text-center mt-5 d-flex justify-content-center">
      {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact.id}>
            <ContactCard
              contact={contact}
            />
          </div>
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </ul>


    // </div>
  );
}; 