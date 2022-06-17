import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { TaskProvider } from './context/taskContext';
import { ImportantProvider } from './context/importantContext';
import { BgProvider } from './context/bgContext';
import { UserProvider } from './context/userContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <BgProvider>
  <UserProvider>
   <TaskProvider>
        <ImportantProvider>
          <App />
        </ImportantProvider>
      </TaskProvider>
      </UserProvider>    
  </BgProvider>

  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
