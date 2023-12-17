import { react } from "react";
import { Route, Switch, BrowserRouter as Router, useHistory } from 'react-router-dom';


const LayoutRoutes = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, component, exact }, i) => (
        <Route
          exact={exact}
          key={i}
          path={path}
          component={component}
        />
      ))}
    </Switch>
  )
}
export default LayoutRoutes;
