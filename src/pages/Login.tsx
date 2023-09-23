import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonLoading, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Home.css';
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../firebaseConfig'
import { setUserState } from '../redux/actions';



const Login: React.FC = () => {

  const history = useHistory()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [busy, setBusy] = useState<boolean>(false)

  const [present] = useIonToast();
  const dispatch = useDispatch()

  const presentToast = (message: string, duration = 2000) => {
   present({
      message, duration
    });
  }

  async function login() {
    setBusy(true)
    const res = await loginUser(username, password)
    console.log('res',res)
    if (res.user) {
      presentToast('You have logged in')
      dispatch(setUserState({email: res.user.email, auth: true}))
      history.push('/dashboard')

    } else {
      presentToast(res)
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      {<IonLoading message="Please wait" duration={0} isOpen={busy}/>}
      <IonContent fullscreen className="ion-padding">
        <IonInput 
          placeholder='username'
          onIonChange={(e: any) => { setUsername(e.target.value)}}
          ></IonInput>
        <IonInput 
          type="password"
          placeholder='password'
          onIonChange={(e: any) => { setPassword(e.target.value)}}
        ></IonInput>
        <IonButton onClick={login} >Login</IonButton>
        <p>New here?<Link to="/register" className="ion-padding">Register</Link></p>
        <p><Link to="/">Back Home</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Login;