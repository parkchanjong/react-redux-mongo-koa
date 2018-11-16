import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { notfoundpage } from 'pages';





const App = () => {
  return (
    <div>
      <Switch>

 
        <Route component={notfoundpage}/>
      </Switch>

    </div>
  );
};

export default App;
