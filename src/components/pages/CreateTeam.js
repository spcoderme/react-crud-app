import React, { useState } from "react";
import {useHistory} from 'react-router-dom'
import axios from 'axios';

const CreateTeam = () => {
  let history = useHistory();
  const [newUser, setnewUser] = useState([]);

  const loadUser = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setnewUser(values => ({...values, [name]: value}))
  };
  const{ name , email, phone} = newUser;
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:3003/users', newUser)
    history.push("/");
    
  };

  return (
    <div className="container text-center my-3 ">
      <h3>
        <b>Create Profile For BNDBazzar Users</b>
      </h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Enter your name:
          <input
            type="name"
            name="name"
            value={name || ""}
            onChange={(e) => loadUser(e)}
          />
        </label>
        <label>
          Enter your Email:
          <input
            type="Email"
            name="email"
            value={email || ""}
            onChange={(e) => loadUser(e)}
          />
        </label>
        <label>
          Enter your Mobile No:
          <input
            type="phone"
            name="phone"
            value={phone || ""}
            onChange={(e) => loadUser(e)}
          />
        </label>
        <input type="submit"  />
      </form>
    </div>
  );
};

export default CreateTeam;
