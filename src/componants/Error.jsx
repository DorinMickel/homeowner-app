import React from 'react';
import { Alert } from 'react-bootstrap';


function Error(props) {
  if (props.show) {
    return (
      <Alert variant="danger"  dismissible>
        <p>
          {props.error}
        </p>
      </Alert>
    );
  }
  return null;
  }
  
export default Error