import './App.scss';
import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import store from './redux/stores/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/movie-detail" component={MovieDetail} />
          <Route>
            <h2>404. Page not found.</h2>
            <Link to="/">Home</Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
