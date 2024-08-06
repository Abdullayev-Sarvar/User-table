import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserDetail.scss';

const UserDetail = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then(response => {
        setUser(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='user'>
        <div key={user.id} className="user-detail">
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
       </div>
    </div>
  );
};

export default UserDetail;
