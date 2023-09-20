import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

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
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput 
          placeholder='username'
          onIonChange={(e: any) => { setUsername(e.target.value)}}
          ></IonInput>
        <IonInput 
          placeholder='password'
          onIonChange={(e: any) => { setPassword(e.target.value)}}
        ></IonInput>
        <IonButton onClick={loginUser}>Login</IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Login;