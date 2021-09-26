import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from './Pages/Home';
import Register from './Pages/Register';
function App() {
  return <>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/duly-register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>

  </>


}

export default App;
