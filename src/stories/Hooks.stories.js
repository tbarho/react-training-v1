import React from "react";
import useFetch from "../hooks/useFetch";

export default {
  title: "Hooks|useFetch",
};


export const normal = () => {
  const { loading, data, error } = useFetch("/users");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops, there was an error.</div>
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      {data.map((d) => (
        <li key={d.id}>{d.username}</li>
      ))}
    </div>
  );
};
