import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Layout from './components/Layout';
import List from './pages/List';
import Edit from './pages/Edit';
function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<List />}
          />
          <Route
            path="/edit/:index"
            element={<Edit />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  )
}

export default App
