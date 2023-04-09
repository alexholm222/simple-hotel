import './App.css';
import Authorization from '../Authorization/Authorization';
import Main from '../Main/Main';
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from '../../utils/ProtectedRoute';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const logIn = useSelector(state => state.reducerLogin.login);

  return (
    <div className="page">
      <Routes>
        <Route  path="/" exact element={logIn ? <ProtectedRoute component={Main} loggedIn={logIn}/> : <Navigate to="/sign-in" replace/>}/>
        <Route  path="/sign-in" element={logIn ? <Navigate to="/" replace/> : <Authorization/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
