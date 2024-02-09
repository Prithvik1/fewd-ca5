import React, { useState } from "react";
import "./register.css";

export default function Form() {

  const [field, setField] = useState({
    firstName:"",
    lastName:"",
    email:"",
    mobile:""
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={(e)=>{e.preventDefault();
        if(field.firstName && field.lastName && field.email && field.mobile)setValidation(true);
        setSubmit(true)}}>

        {submitted && validate?<div className="success-message">You have successfully registered </div>:null}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e)=>{setField({...field, firstName:e.target.value})}}
        />

        {submitted && !field.firstName ?<span>Please enter your first name</span>:null}
      
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={field.lastName}
          onChange={(e)=>{setField({...field, lastName:e.target.value})}}
        />

        {submitted && !field.lastName ?<span>Please enter your last name</span>:null}
       
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={field.email}
          onChange={(e)=>{setField({...field, email:e.target.value})}}
        />

        {submitted && !field.email ?<span>Please enter your email</span>:null}

        <input
          id="Movbile"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={field.mobile}
          onChange={(e)=>{setField({...field, mobile:e.target.value})}}
        />

        {submitted && !field.email ?<span>Please enter your password</span>:null}

      

        <button className="form-field" type="submit">
           Regitser 
        </button>
      </form>
    </div>
  );
}


