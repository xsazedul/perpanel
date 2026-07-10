import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import axios from 'axios';
import App from './App.tsx';
import './index.css';

const currentPath = window.location.pathname;
const cloudShellPrefixMatch = currentPath.match(/^(\/cloudshell\/port\/\d+\/)/);
const apiPathPrefix = cloudShellPrefixMatch ? `${window.location.origin}${cloudShellPrefixMatch[1]}` : window.location.origin;
const metaEnv = (import.meta as any).env;
const apiBaseURL = metaEnv?.VITE_API_BASE_URL || apiPathPrefix;

axios.defaults.baseURL = apiBaseURL;
axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
