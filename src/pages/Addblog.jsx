import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleRegistration = (data) => {
    console.log(data); // Display the form data in the console
    // Perform any other logic or API calls here

    reset(); // Reset the form fields
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration)} className="my-form">
      <div className="form-group">
        <label htmlFor="name">Blog Name</label>
        <input
          id="name"
          name="name"
          className="form-control"
          {...register('name')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          className="form-control"
          {...register('description')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author Name</label>
        <input
          id="author"
          type="text"
          name="author"
          className="form-control"
          {...register('author')}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterForm;
