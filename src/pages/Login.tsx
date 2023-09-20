import React from 'react';
import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput placeholder='username'></IonInput>
        <IonInput placeholder='password'></IonInput>
      </IonContent>

    </IonPage>
  );
};

export default Login;