import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom'
import { loginUser } from '../firebaseConfig'

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [present] = useIonToast();

  const presentToast = (message: string, duration = 2000) => {
   present({
      message, duration
    });
  }

  async function login() {
    const res = await loginUser(username, password)
    
    if (!res) {
      presentToast('error logging in')
    } else {
      presentToast('ok')
    }
  
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
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
        <IonButton onClick={login}>Login</IonButton>
        <p>New here?<Link to="/register" className="ion-padding">Register</Link></p>
        <p><Link to="/">Back Home</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Login;