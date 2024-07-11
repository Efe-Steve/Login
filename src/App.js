import React from 'react';
import Login from './login';
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom';
import TodoList from './Components/TodoList';
import PrivateRoute from './Components/PrivateRoute';
// import Login from './components/Login';
// import TodoList from './components/TodoList';
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/login"
        element={
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        }
      />
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}

export default App;
