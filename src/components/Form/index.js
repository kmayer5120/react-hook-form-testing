import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './form.validator';

import './styles.css';

const Form = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" {...register('firstName')} />
      <div className="errors">{errors.firstName?.message}</div>

      <label htmlFor="firstName">Last Name</label>
      <input type="text" name="lastName" {...register('lastName')} />
      <div className="errors">{errors.lastName?.message}</div>

      <label htmlFor="firstName">Email</label>
      <input type="text" name="email" {...register('email')} />
      <div className="errors">{errors.email?.message}</div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
