import React from 'react'
import { Link } from 'react-router-dom';
import { getListOfUsers, deleteUser } from '../services/localStorage';

export function UserItem({ user, setUsers }) {
  const { id, name, email, age } = user;
  const removeUser = () => {
    deleteUser(id);
    setUsers(getListOfUsers)
  }

  return (
    <tr>
      <td>
        {
          name.length > 10 ? name.slice(0, 10) + '...' : name
        }
      </td>
      <td>{email}</td>
      <td>{age}</td>
      <td>
        <Link to={`/edit-user/${id}`}>
          <button className="primary-button">Editar</button>
        </Link>
      </td>
      <td>
        <button onClick={() => removeUser()} className="secondary-button">Eliminar</button>
      </td>
      {/* <tr>

        <td>
          <Link to={`/edit-user/${id}`}><button className='primary-button'>Editar</button></Link>
          
        </td>
        <td><button className='secondary-button'>Eliminar</button></td>
      </tr> */}
    </tr>
  );
}
