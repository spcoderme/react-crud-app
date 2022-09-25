import React, { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import axios from "axios";

const DashSection = () => {
  
 
  let history = useHistory();
  

  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users/");
    setUser(result.data);
  };
  
  const handleRemove = async id => {
    alert(`are you confirm to delete ${id} ?`)
      await axios.delete(`http://localhost:3003/users/${id}`);
     history.push("/");
    
  


    
              
  };
 
  return (
    <>
      <div className="container row mt-3 justify-content-center ">
        {users.map((user) => (
          <div
            className="card rounded shadow mx-auto mb-3"
            style={{ width: "18rem" }}
          >
            
            <div className="card-body ">
              <h5 className="card-title "> <span className="badge bg-dark text-wrap text-capitalize font-monospace position-relative"> {user.name}<span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span></span></h5>
              <p className="card-text">
                Hello !!<strong> {user.name}</strong> here!<br/>
                Connect With Me at email:<strong> {user.email}</strong>
                <br/>
                Call at <strong> {user.phone}</strong> 
              </p>
            </div>

            <ul className="list-group list-group-flush">
              <li className="list-group-item text-warning bg-dark text-center">
              <strong> {user.name}</strong>
              </li>
              <li className="list-group-item text-warning bg-dark text-center">
              <strong> {user.id}</strong>
              </li>
              <li className="list-group-item text-warning bg-dark text-center">
              <strong> {user.email}</strong>
              </li>
            </ul>
            <div className="card-body text-center">
              <Link to={`/edit/${user.id}`} className="btn btn-outline-dark mx-2">
                Edit
              </Link>
              <Link to={`/users/${user.id}`} className="btn btn-outline-danger mx-2"  onClick={()=>handleRemove(user.id)}>
                Remove
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashSection;
  
  
  
  
    
  

