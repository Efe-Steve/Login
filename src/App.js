import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import TodoList from './Components/TodoList';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/TodoList"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
