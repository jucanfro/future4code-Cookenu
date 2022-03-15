import React, { useState } from 'react';
import Router from './routes/Router'
import theme from "./constants/theme";
import { ThemeProvider } from '@material-ui/core/styles';


const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
    </ThemeProvider>
  );
}

export default App;
