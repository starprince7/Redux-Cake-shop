import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'

// comp
import Cake from "./components/Cake"
import IceCream from './components/IceCream'

function App() {
  return (
    <Provider store={store} >
      <div className="App">
      <h1>Hello world</h1>
      <Cake/>
      <IceCream/>
    </div>
    </Provider>
  );
}

export default App;
