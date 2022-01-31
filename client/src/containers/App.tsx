import React, { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import Auth from '../components/Auth';

function App() {

  const {user} = useAppSelector(state => state.user);
  console.log(user, 'user from selector');
  
  return (
    <div >
      

      <Auth/>
    </div>
  );
}

export default App;
