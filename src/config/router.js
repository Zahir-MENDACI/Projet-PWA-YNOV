import React from 'react'

import Connexion from "../pages/Connexion";
import Videos from '../pages/Videos';
import PrivateRoute from './privateRoute';
import Details from '../pages/Details';
import Deconnexion from '../components/Deconnexion'
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch
} from 'react-router-dom'

const Routes = () => 
{
    return (
    <Router>
        {/* <Deconnexion></Deconnexion> */}
        <Switch>
            <Route exact path="/" component={Connexion}></Route>
            <PrivateRoute exact path="/videos" component={Videos}></PrivateRoute>
            <Route exact path="/videos/:id" component={Details}></Route>
            {/* <Redirect to='/'></Redirect> */}
        </Switch>
    </Router>
    )
}

export default Routes