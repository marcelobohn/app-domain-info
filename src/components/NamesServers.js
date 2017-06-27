import React from 'react';
import { Panel } from 'react-bootstrap';

export default function NamesServers(props) {
  const title = "Servidores de nome";
  return (
    <Panel header={title}>
      {props.names.map((item, index) => (
        <div key={index} >{item}</div>
      ))}
    </Panel>
  );
}
