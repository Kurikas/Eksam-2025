import React from 'react';
import ReactDOM from 'react-dom/client'
import {ListExamples, AddExampleForm} from "./examples.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<><AddExampleForm/> <ListExamples/></>);