import React from 'react';
import { Panel } from 'react-bootstrap';

export default function Whois(props) {
  const printFields = Object.keys(props.fields).map(function(key) {
    return <div key={key}><b>{key}:</b> {props.fields[key]}</div>
  });

  const title = "Whois";

  return (
    <Panel header={title}>
      {printFields}
    </Panel>
  );
}
