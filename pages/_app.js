import '../styles/globals.css'
import {useContext} from 'react'
import Login from '../components/auth/login'
import Layout from '../components/layout'
import { AuthContext, AuthProvider } from '../contexts/authContext';
import { isEmpty } from '../helper/utilityFunctions';

import { auth } from "../firebase/clientApp"; 

export default function MyApp({ Component, pageProps }) {

 
  console.log(auth)
  console.log(auth.currentUser);

  if (auth.currentUser) {
    return (
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
      
  )
  }
  else {
    return (
      <AuthProvider>
        <Login />
      </AuthProvider>
  )
  }
}

