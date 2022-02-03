import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../UI/homepage.css"
export default function Homepage() {
    const navigate = useNavigate();

  return (
  <div className='homepage-container'>
      <button onClick={()=>{navigate('/signup')}}>Sign&nbsp;up</button>
      <button onClick={()=>{navigate('/login')}}>Login</button>
  </div>
  );
}
