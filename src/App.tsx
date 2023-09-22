import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom'; //Redirect,
import { IonApp, IonRouterOutlet, IonSpinner, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { getCurrentUser } from './firebaseConfig'
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from './redux/actions';

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


setupIonicReact();

//https://react.dev/reference/react/useContext#updating-data-passed-via-context

const RoutingSystem: React.FC = () => {

  const isAuth = useSelector((state: any) => state.user.auth )
  console.log('isAuth', isAuth)
  //const go = username != null ? true : false;
  //console.log(go)
  return (
    
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact 
            render={()=>{
              return isAuth ? <Redirect to='/dashboard' /> : <Home />
            }}          
          />
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/dashboard" exact 
            render={()=>{
              return isAuth ? <Dashboard /> : <Redirect to='/' />
            }}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    
  );
}

const App: React.FC = () => {

  //const [busy, setBusy] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {

    getCurrentUser().then((user: any) => {
      if(user){
        console.log('current user:', user.email)
        dispatch(setUserState({email: user.email, auth: true}))
        //window.history.replaceState({}, '', '/dashboard')
      } else {
        console.log('no current user')
        //window.history.replaceState({}, '', '/login')
      }
    })

  }, [])
  

  return (
    <IonApp>
      <RoutingSystem></RoutingSystem>
    </IonApp>
  )

}

//{busy ? <IonSpinner /> : <RoutingSystem></RoutingSystem>}

export default App;
