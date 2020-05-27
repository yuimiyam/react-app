// App.jsx
import React from 'react';
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import axios from 'axios';

const getDataFromAPI = async keyword =>{
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {
  const languages = ['React', 'Angular', 'Vue'];
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        <ul>
          <li><Link to='/'>React</Link></li>
          <li><Link to='/angular'>Angular</Link></li>
          <li><Link to='/vue'>Vue</Link></li>
        </ul>
        <hr/>
        <Route
          exact
          path='/'
          render={
            props =>
              <Booklist
              language={languages[0]}
              getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/angular'
          render={
            props =>
              <Booklist
              language={languages[1]}
              getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          path='/vue'
          render={
            props =>
              <Booklist
              language={languages[2]}
              getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
      </div>
    </BrowserRouter>
  );
}
export default App;