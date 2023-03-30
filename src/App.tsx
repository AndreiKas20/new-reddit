import React from 'react';
import './App.css';
import './styles/normalize.css'
import './styles/main.global.css'
import './styles/colors.global.css'
import {Layout} from "./Layout";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
            <Provider store={store}>
                <Layout/>
            </Provider>
        </BrowserRouter>
  );
}

export default App;
