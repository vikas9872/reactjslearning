import React, { useState } from 'react'

const IfelseRendering = () => {
  const [islogIn, setLogIn] = useState(false);

  let message;
  if (islogIn) {
    message = <div>Welcome Vikas</div>;
  } else {
    message = <div>Welcome Guest</div>;
  }

  return <div>If-else rendering: {message}</div>;
};

export default IfelseRendering
