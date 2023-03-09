import React, { useContext } from 'react';
import UserContext from './context';


const Page1 = () => {
  const {context, setContext, context2, setContext2} = useContext(UserContext);
  
  return (
    <html>
      page1 {context} <p/>
      {context2}<p/>
      <button onClick={() => setContext('New Value')}>
        Change Context Value
      </button>
      <p/>
      <button onClick={() => setContext2('New Value 2')}>
        Change Context Value
      </button>
    </html>
  );
};

export default Page1;
