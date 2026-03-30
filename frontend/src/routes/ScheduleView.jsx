import { useState, useEffect } from "react";

const ScheduleView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.73:81/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h4>{user.id} - {user.user_name}</h4>
            <p>{user.cpf}</p>
            <p>{user.email}</p>
            <p>{user.senha}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleView;
