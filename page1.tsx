import React, { useContext } from 'react';
import UserContext from './context';
import {SecondContext} from './context';

const Page1 = () => {
  const [context, setContext] = useContext(UserContext);
  const [context2, setContext2] = useContext(SecondContext);
  return (
    <html>
      page1 {context} <p/>
      <button onClick={() => setContext('New Value')}>
        Change Context Value
      </button>
    </html>
  );
};

export default Page1;
