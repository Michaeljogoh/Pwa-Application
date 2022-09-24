// import { useState } from "react";
// import axios from 'axios';
// import {BaseURL} from '../API/API';
import '../App.css'



const Create = () =>{


return (
<div className="form-section">
      <h1 className="form-heading">Create User</h1>

      <div className="form-container">
        <form >
          <div className="form-control">
            <label htmlFor="firstname" />
            <input
              className="form-input"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="firstname"
            //   onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="lastname" />
            <input
              className="form-input"
              type="text"
              id="lastname"
              name="lastname"
           
              placeholder="lastname"
            //   onChange={handleChange}
              required
            ></input>
          </div>
        
          <div className="form-control">
            <label htmlFor="mail" />
            <input
              className="form-input"
              type="text"
              id="mail"
              name="mail"
            
              placeholder="mail"
            //   onChange={handleChange}
              required
            ></input>
          </div>
          <div className="form-submit-container">
            <button className="submit-btn" required>Submit</button>
          </div>
        </form>
      </div>
    </div>
        

    );
};

export default Create