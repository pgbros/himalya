// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './webapp/auth';
import Home from './UI-Components/Components/home';
import { MyContextProvider } from './MyContext';

const App = () => {
  return (
    <Router>
      <MyContextProvider>
        <Routes>
          {/* <Route path="/:block/:room/:tenant" component={UserProfile} />
          <Route path="/:block/:room" component={UserProfile} />
          <Route path="/:block" component={UserProfile} /> */}
          <Route path="/signIn" element={<Auth />} />
          <Route path="/signUp" element={<Auth />} />
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </MyContextProvider>
    </Router>
  );
};

export default App;
