import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AuthFlow from './components/AuthFlow';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <div className="App">
          <AuthFlow />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;