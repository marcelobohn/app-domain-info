import React from 'react';

export default function NamesServers(props) {
  return (
    <div>
      <h3>Servidores de nome</h3>
      {props.names.map((item, index) => (
        <div key={index} >{item}</div>
      ))}
    </div>
  );
}
