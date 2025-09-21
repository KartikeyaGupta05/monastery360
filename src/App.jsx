import React from "react";
import Routes from "./Routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>

      <Routes />
     <Toaster position="top-center" reverseOrder={false} />
    </div>
 
  );
}

export default App;
