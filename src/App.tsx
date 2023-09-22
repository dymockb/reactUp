import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'; //Redirect,
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './firebaseConfig'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import Dashboard from './pages/Dashboard';

setupIonicReact();

const RoutingSystem: React.FC = () => {
  return (
    
      <IonReactRouter>
        <IonRouterOutlet>
          {/*
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          */}
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/dashboard" component={Dashboard} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    
  );
}

const App: React.FC = () => {
  const [busy, setBusy] = useState(true)
  useEffect(() => {
    getCurrentUser().then(user => {
      if(user){
        //logged in
        window.history.replaceState({}, '', '/dashboard')
      } else {
        window.history.replaceState({}, '', '/')
      }
      setBusy(false)
    })

  }, [])

  return (
  <IonApp>
    
    {busy ? <IonSpinner /> : <RoutingSystem></RoutingSystem>}
    
  </IonApp>
  )

}



export default App;
