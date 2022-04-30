import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { API } from "../../shared/services/api";

const RegisterForm = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    API.post("/users/register", JSON.stringify(data)).then((response) => {
      console.log(response);
      navigate("/login");
    });
  };

  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          type='email'
          name='email'
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        <label>Password</label>
        <input
          type='password'
          name='Password'
          {...register("password", { required: true })}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
