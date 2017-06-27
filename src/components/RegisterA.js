import React from 'react';
import { Panel } from 'react-bootstrap';

export default function RegisterA(props) {
  const title = "Registro A";
  return (
    <Panel header={title}>
      <p>{ props.address }</p>
    </Panel>
  );
}
