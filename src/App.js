import React, { Component } from 'react';
import './App.css';
import Landing from '../src/Components/Landing';
import Form from './Components/Form'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './Store/reducer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//creating store for redux
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
     
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/add" component={Form}  />
        </Switch>
        </BrowserRouter>
       </Provider>
    );
  }
}

export default App;
