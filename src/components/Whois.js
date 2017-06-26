import React from 'react';

export default function Whois(props) {
  const printFields = Object.keys(props.fields).map(function(key) {
    return <div key={key}>{key}: {props.fields[key]}</div>
  });

  return (
    <div>
      <h3>Whois</h3>
      {printFields}
    </div>
  );
}
