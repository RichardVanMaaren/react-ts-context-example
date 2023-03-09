import React, { useContext } from 'react';
import UserContext from './context';


const Page2 = () => {
  const {context, setContext, context2, setContext2} = useContext(UserContext);

  return (
    <html>
      page2 <br/> {context} <p/>
      {context2}<p/>
      <button onClick={() => setContext('New Value from page 2'  )}>
        Change Context 1
      </button>
      <p/>
      <button onClick={() => setContext2('New Value from page 2')}>
        Change Context 2
      </button>
    </html>
  );
};

export default Page2;
