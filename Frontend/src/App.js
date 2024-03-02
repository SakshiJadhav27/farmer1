import React from 'react';
import './App.css';
import { Router } from './Component/Router';
import { AuthContextProvider } from './Context/AuthContext';
import { LanguageProvider } from './Component/LanguageTranslate/LanguageContext';



function app(){

  return(
    <div>
      <AuthContextProvider>
     <LanguageProvider>
      <div className='app'>
        <Router/>
      </div>
      </LanguageProvider>
      </AuthContextProvider>
    </div>

)

}
export default app;

