import React, {useState} from 'react'

const AuthContext = React.createContext([{}, () => {}])

const AuthProvider = ({ children }) => {
    const [state, setState] = useState({})
    return (
        <AuthContext.Provider value= {[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider}