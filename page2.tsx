import React, { useContext, useState } from 'react';
import UserContext from './context';

const Page2 = () => {
  const [context, setContext] = useContext(UserContext);

  return (
    <html>
      page2 {context} <p/>
      <button onClick={() => setContext('regeachtig')}>
        Change Context Value
      </button>
    </html>
  );
};

export default Page2;
