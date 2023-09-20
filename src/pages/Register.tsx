import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom'

const Register: React.FC = () => {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function registerUser() {
    // eslint-disable-next-line
    console.log(username, password, confirmPassword)
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Register</IonTitle>
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
        <IonInput 
          type="password"
          placeholder='confirm password'
          onIonChange={(e: any) => { setConfirmPassword(e.target.value)}}
        ></IonInput>
        <IonButton onClick={registerUser}>Register</IonButton>
        <p>Already have an account? <Link to="/login" className="ion-padding">Login</Link></p>
        <p><Link to="/">Back Home</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Register;