import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetail from './UserDetail';
import './User.scss';

const User = () => {
  const { id } = useParams();

  return (
    <div className="user-page">
      <UserDetail id={id} />
    </div>
  );
};

export default User;
