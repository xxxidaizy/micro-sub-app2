import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './public-path';

let root = null;
function render(props) {
  const { container } = props;
  root = root || ReactDOM.createRoot(container ? container.querySelector('#appRoot2') : document.getElementById('appRoot2'))
  root.render(
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/micro2' : '/'}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}
export async function mount(props) {
  console.log("[react18]props from main framework", props);
  render(props);
}
export async function unmount(props) {
  root.unmount();
  root = null;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
