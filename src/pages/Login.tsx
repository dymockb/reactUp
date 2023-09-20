import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom'

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function loginUser() {
    // eslint-disable-next-line
    console.log(username, password)
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
        <IonButton onClick={loginUser}>Login</IonButton>
        <p>New here?<Link to="/register" className="ion-padding">Register</Link></p>
        <p><Link to="/">Back Home</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Login;