import 'assets/styles/custom.scss';
import './App.css';

import Routes from 'Routes';
import { useState } from 'react';
import { AuthContext, AuthContextData } from 'AuthContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    //O provider vai prover o contexto global.
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}> 
      <Routes />
    </AuthContext.Provider>
  );
}

export default App;
