import React, { useContext } from 'react';
import UserContext from './context';


const Page1 = () => {
  const {context, setContext, context2, setContext2} = useContext(UserContext);
  
  return (
    <html>
      page1 <br/> {context} <p/>
      {context2}<p/>
      <button onClick={() => setContext('New Value from page 1')}>
        Change Context 1
      </button>
      <p/>
      <button onClick={() => setContext2('New Value from page 1')}>
        Change Context 2
      </button>
    </html>
  );
};

export default Page1;
