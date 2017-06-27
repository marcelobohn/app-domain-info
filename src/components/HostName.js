import React from 'react';
import { Panel } from 'react-bootstrap';

export default function HostName(props) {
  const title = "Host Name";
  return (
    <Panel header={title}>
      <h3>Host Name</h3>
      <p>{ props.name }</p>
    </Panel>
  );
}
