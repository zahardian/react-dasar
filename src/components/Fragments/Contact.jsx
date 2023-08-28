const Contact = ({ contacts, title, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="text-center items-center justify-center space-y-5 my-20">
        {contacts.map((contact) => (
          <div
            className="bg-green-200 w-full max-w-sm rounded-lg mx-auto"
            key={contact.id}
          >
            <p>{contact.username}</p>
            <p>{contact.telp}</p>
            <div className="space-x-5">
              <button className="bg-orange-400 text-sm font-bold rounded text-white px-2 py-1">
                Edit
              </button>
              <button
                onClick={() => onDelete(contact.id)}
                className="bg-red-500 text-sm font-bold rounded text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
