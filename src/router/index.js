import React from 'react';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { routerPaths } from './helper';
import ErrorBoundary from '../components/ErrorBoundary';



const delay = 200;

const Main = Loadable({
  loader: () => import('../pages/Main'),
  loading: () => null,
  delay,
});
/*const Presale = Loadable({
  loader: () => import('../pages/Presale'),
  loading: () => null,
  delay,
});*/
const Privacy = Loadable({
  loader: () => import('../pages/Privacy'),
  loading: () => null,
  delay,
});


function AppRouter() {
  return (
    <ErrorBoundary>
      <Switch>
        <Route exact path={routerPaths.main} component={Main} />
        {/*<Route exact path={routerPaths.presale} component={Presale} />*/}
        <Route exact path={routerPaths.privacy} component={Privacy} />
      </Switch>
    </ErrorBoundary>
  );
}

export default hot(module)(AppRouter);
