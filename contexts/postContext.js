import React, { useState } from "react";

const PostContext = React.createContext([{}, () => {}]);

const PostProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <PostContext.Provider value={[state, setState]}>
      {children}
    </PostContext.Provider>
  );
};

export { AuthContext, AuthProvider };
