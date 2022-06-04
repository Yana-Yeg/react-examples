import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Randomuser.module.css";

const Randomuser = () => {
  const [users, setUsers] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://randomuser.me/api?results=200");
        setUsers(res.data.results);
      } catch {
        alert("User request failed");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={style.wrapper}>
      <input
        className={style.input}
        value={search}
        placeholder="Search users"
        onChange={(e) => setSearch(e.target.value)}
      />
      {users ? (
        <div className={style.list}>
          {users
            .filter(
              (user) =>
                `${user.name.last} ${user.name.first}`
                  .toLowerCase()
                  .startsWith(search.toLowerCase())
              // .includes(search.toLowerCase())
            )
            .map((user) => {
              return (
                <p
                  key={user.name.last + Math.random}
                >{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
              );
            })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Randomuser;
