import { useState, useEffect } from "react";

const Api = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [user, setUser] = useState([]);

  const getDataUser = async () => {
    const response = await fetch(url);
    const dataUser = await response.json();
    setUser(dataUser);
    console.log(user);
  };

  useEffect(() => {
    getDataUser();
  });

  return (
    <div>
      <p>Title: {user.userId}</p>
      <p>Title: {user.id}</p>
      <p>Title: {user.title}</p>
      <p>Title: {user.body}</p>
    </div>
  );
};

export default Api;
