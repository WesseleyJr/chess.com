import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Login } from './src/pages/Login';
import { Home } from './src/pages/Home';

export default function App() {
  return (
    <>
          <StatusBar style="light" />
          <Login/> 
          {/* <Home/> */}
    </>
  )

};
