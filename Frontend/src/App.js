import React from 'react';
import './App.css';
import { Router } from './Component/Router';
import { AuthContextProvider } from './Context/AuthContext';
import { LanguageProvider } from './Component/LanguageTranslate/LanguageContext';



function app(){

  return(
    <div>
      <LanguageProvider>
      <AuthContextProvider>
      <div className='app'>
        <Router/>
      </div>
      </AuthContextProvider>
      </LanguageProvider>
    </div>

)

}
export default app;

