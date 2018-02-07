import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (
        <div>
            <Header header="TO-DO List"/>
            <TodoApp />
        </div>
    ), 
    document.getElementById('root'));
registerServiceWorker();
