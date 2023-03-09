import React, { useState } from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import UserContext from './context';

function App() {
  const [context, setContext] = useState('start');

  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="Page1">Page1</Link>
          <Link to="Page2">Page2</Link>
        </div>
        <Routes>
          <Route
            path="Page1"
            element={
              <UserContext.Provider value={[context, setContext]}>
                <Page1 />
              </UserContext.Provider>
            }
          />
          <Route
            path="Page2"
            element={
              <UserContext.Provider value={[context, setContext]}>
                <Page2 />
              </UserContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
