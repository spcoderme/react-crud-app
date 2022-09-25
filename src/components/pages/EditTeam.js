import React ,{useEffect, useState} from 'react';
import { useParams , useHistory } from 'react-router-dom';
import axios from 'axios';


const EditTeam = () => {
  let history = useHistory();
  const { id } = useParams();
   const [user, setUser] = useState({
     name: "",
     email: "",
     phone: ""
   });
   
   const loadUser = async(e) => {
     const result = await axios.get(`http://localhost:3003/users/${id}`);
     setUser(result.data);
     
    };
    
    useEffect(() => {
      loadUser();
    }, []);

    const handleEdit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`, user);
      history.push("/");
    };
    
    const{ name , email, phone} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="container text-center my-3 ">
      <h3>
        <b>Editing For BNDBazzar User Profile</b>
      </h3>
      <form onSubmit={e => handleEdit(e)}>
        <label>
          Enter your name:
          <input
            type="name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </label>
        <label>
          Enter your Email:
          <input
            type="Email"
            name="email"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </label>
        <label>
          Enter your Mobile No:
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={e => onInputChange(e)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
    )
}

export default EditTeam;