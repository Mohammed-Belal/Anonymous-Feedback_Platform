import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home';
import CreateRoomPage from './CreateRoomPage';
import FeedbackPage from './FeedbackPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserProtectWrapper from './Pages/UserProtectWrapper';
import UserContext from './Context/userContext';
import RoomPage from './RoomPage';
import Dashboard from "./Dashboard";

// import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserContext>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/feedback/:roomId" element={<FeedbackPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={
            <UserProtectWrapper>
              <HomePage />
            </UserProtectWrapper>
          } />
        </Routes>
      </Router>
    </UserContext>
  );
}


export default App;





