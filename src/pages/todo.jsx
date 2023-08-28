import React, { useState } from "react";

const Todo = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Zahardian",
      city: "Solo",
    },
    {
      id: 2,
      name: "Chika",
      city: "Jakarta",
    },
    {
      id: 3,
      name: "Gracia",
      city: "Bandung",
    },
  ]);

  const handleDelete = (id) => {
    const filterContact = contacts.filter((contact) => contact.id !== id);
    setContacts(filterContact);
  };

  return (
    <>
      <div className="pt-20">
        <h1 className="mb-10 text-xl font-bold">Daftar Contact:</h1>
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between py-5"
          >
            <div className="font-semibold">
              <p>{contact.name}</p>
              <p>{contact.city}</p>
            </div>
            <div>
              <button
                onClick={() => handleDelete(contact.id)}
                className="bg-red-500 text-white font-bold rounded px-2 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
