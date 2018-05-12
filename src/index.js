import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from './components/Modal'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
registerServiceWorker();
