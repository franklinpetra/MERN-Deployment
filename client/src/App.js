import React, { useState } from 'react';
import "./bootstrap.css"
import { Router } from "@reach/router"
import Header from "./components/Header"
import New from "./components/New"
import Login from "./components/Login"
import Show from "./components/Show"

function App() {
  const [flag, setFlag] = useState(false)
  const [statusFlag, setStatusFlag] = useState(false)
    


  return (
    <div className="App container">
      <Header />
      <Router>
          <New flag={flag} setFlag={setFlag} path="/new" />
          <Show flag={flag} setFlag={setFlag} path="/" />
          <Login statusFlag={statusFlag} setStatusFlag={setStatusFlag} path="/sign_in" />
      </Router>
    </div>
  );
}

export default App;