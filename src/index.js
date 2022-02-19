import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from "./REDUX/store";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerender(store.getState().chatReducer);
store.subscribe(()=>{
  let state = store.getState().chatReducer
  rerender(state);
})


