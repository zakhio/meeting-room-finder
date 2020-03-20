import React, { Component } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
