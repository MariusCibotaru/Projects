import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { CssBaseline, ThemeProvider} from "@mui/material";

import theme from "./utils/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline/>
  <Router>
    <App />
  </Router>
  </ThemeProvider>
);

