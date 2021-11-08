import '../styles/globals.css'
import {useState} from 'react'
import Login from '../components/auth/login'
import Layout from '../components/layout'
import { AuthContext, AuthProvider } from '../contexts/authContext';
import { isEmpty } from '../helper/utilityFunctions';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingScreen from '../components/loadingScreen/loadingScreen';


export default function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
 
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setLoading(false);
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });
  if(!loading) {
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
  else {
    return (
      <>
        <LoadingScreen />
      </>
    )
  }
    
}

