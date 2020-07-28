import React, { useContext } from 'react';

import { AuthContext } from '../../context/auth';
import useFetch from '../../hooks/useFetch';

function ProgramDetails() {
  const { username } = useContext(AuthContext);
  const { data, loading, error } = useFetch('/albums');

  if (loading) {
    return (<div>Loading...</div>);
  }

  if (error) {
    return (<div>Oops, there was an error!</div>);
  }

  return (
    <>
      <h1>Hi, {username}</h1>
      <ul>
        {data.map(d => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ProgramDetails;
