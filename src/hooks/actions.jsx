export const fetchAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender");
    let data = await response.json();
    if (data.detail == `Agenda "jeankender" doesn't exist.`) {
        createAgenda();
    }
    dispatch({
        type: "set_agenda",
        payload: { agenda: data.slug, contacts: data.contacts },
    });
}
export const createAgenda = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender", {
        method: "POST",
        headers: {"Content-type":"application/json"}
    })
    let data = await response.json()
    fetchAgenda(dispatch)
}
export const getContacts = async (dispatch, payload) => {
    let response = await fetch ("https://playground.4geeks.com/contact/agendas/jeankender/contacts")
    let data = await response.json();
    dispatch({
        type: "get_contacts",
        payload: {contacts: data.contacts },
    });
}
export const createContact = async (dispatch, payload) => {
    let name = payload.name
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender/contacts", {
        method: "POST",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify ({
                "name": payload.name,
                "phone": payload.phone,
                "email": payload.email,
                "address": payload.address
            })
    })
    getContacts(dispatch);
}
export const updateContact = async (dispatch, payload) => {
    let response = await fetch("https://playground.4geeks.com/contact/agendas/jeankender/contacts/" + payload.id, {
        method: "PUT",
        headers: {"Content-type":"application/json"},
        body: JSON.stringify ({
            "name": payload.name,
            "phone": payload.phone,
            "email": payload.email,
            "address": payload.address
        })
    })
    getContacts(dispatch);
}
export const deleteContact = async (dispatch, payload) => {
    let response = await fetch(`https://playground.4geeks.com/contact/agendas/jeankender/contacts/${payload.id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    });

    getContacts(dispatch);
}





