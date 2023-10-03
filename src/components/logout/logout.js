import React from 'react';

const  Logout = () => {
      
  const handleLogout = () => {
    sessionStorage.removeItem(''); 

    window.location.href = '/signin'; 
  };

  return (
   
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default Logout;
