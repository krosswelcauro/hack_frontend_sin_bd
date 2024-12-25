import React, { useEffect, useState } from 'react'
import { UserItem } from './UserItem'
import { getListOfUsers } from '../services/localStorage';

export function UserList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getListOfUsers());
  }, []);

  return (
    <div className="table">
      <h2>Gestion de usuarios</h2>

      {
        users.length > 0 ? (
            <>
              <table id='customers'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo electronico</th>
                        <th>Edad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                  {users.map(user => 
                    <UserItem 
                      key={user.id}
                      user={user}
                      setUsers={setUsers}
                    />)}
                </tbody>
              </table>
              <h3>Total de usuarios: {users.length}</h3>
            </>
        ) : (
          <h3>No existen usuarios registrados</h3>
        )
      }
    </div>
  );
}
