import '../styles/globals.css'
import {useState} from 'react'
import Login from '../components/auth/login'
import Layout from '../components/layout'
import { AuthContext, AuthProvider } from '../contexts/authContext';
import { isEmpty } from '../helper/utilityFunctions';

import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState();
 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  if (user) {
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

