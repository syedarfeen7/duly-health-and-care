import {Route, Switch, BrowserRouter} from 'react-router-dom';
import HomePage from './Pages/Home';
function App() {
  return <>

    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>

  </>


}

export default App;
