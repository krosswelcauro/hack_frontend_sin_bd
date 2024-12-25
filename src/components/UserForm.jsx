import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import { addUser, getUserById, editUser } from '../services/localStorage';
import { useNavigate, useParams } from 'react-router-dom';

export function UserForm() {

  const navigate = useNavigate();
  const {id} = useParams();
  const {inputValues, handleInputChange, resetForm, setForm} = useForm({
    name: "",
    email: "",
    age: ""
  })

  useEffect(() => {
    if(id){
      const user = getUserById(id);
      setForm(user);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editUser(id, inputValues) : addUser(inputValues);
    resetForm();
    navigate("/")
  }

  return (
    <div>
      {/* Header */}
      <div className="container">
        <h2>{id ? "Editar" : "Crear"} usuario</h2>

        {/* Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name" className="label">
              Nombre
            </label>
            <input
              id='name'
              name="name"
              value={inputValues.name}
              onChange={handleInputChange}
              type="text"
              className="input input-email"
              placeholder="Jose Perez"
            />
            {/* <Field name='name' type='text' className="input input-email"></Field>
                  <ErrorMessage name='name' component='div' className='message-error'></ErrorMessage> */}

            <label htmlFor="email" className="label">
              Correo electronico
            </label>
            <input
              id='email'
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              type="email"
              className="input input-email"
              placeholder="jose@correo.com"
            />
            {/* <Field name='email' type='email' className="input input-email"></Field>
                  <ErrorMessage name='email' component='div' className='message-error'></ErrorMessage> */}

            <label htmlFor="age" className="label">
              Edad
            </label>
            <input
              id='age'
              name="age"
              value={inputValues.age}
              onChange={handleInputChange}
              type="number"
              className="input input-email"
              placeholder="20"
            />
            {/* <Field name='age' type='number' className="input input-email"></Field>
                  <ErrorMessage name='age' component='div' className='message-error'></ErrorMessage> */}

            <button type="submit" className="primary-button login-button">
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
