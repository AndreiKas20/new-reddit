import React from 'react';
import './App.css';
import './assets/css/normalize.css'
import './assets/css/main.global.css'
import './assets/css/colors.global.css'
import {Layout} from "./Layout";
import {Provider} from "react-redux";
import {store} from "./store/store";

function App() {
  return (
       <Provider store={store}>
         <Layout/>
       </Provider>
  );
}

export default App;
