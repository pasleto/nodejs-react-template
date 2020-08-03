import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Init from './components/Init';

function App() {
  // const [state, setState] = React.useState([]);

  // React.useEffect(() => {

  // }, []);

  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ () => <Init /> } />
        <Route exact path="/init" render={ () => <Init /> } />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;
