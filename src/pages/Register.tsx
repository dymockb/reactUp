import React from 'react';
import { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar, useIonToast, IonLoading } from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom'
import { registerUser} from '../firebaseConfig'

const Register: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [present] = useIonToast();

  const presentToast = (message: string, duration = 2000) => {
   present({
      message, duration
    });
  }

  async function register() {
    setBusy(true)
    console.log(username, password, confirmPassword)

    if (password !== confirmPassword) {
      console.log('dont match')
    }
    const res = await registerUser(username, password)

    if (res == true) {
      presentToast('Registration ok')
    } else {
      presentToast(res)
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Register</IonTitle>
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
        <IonInput 
          type="password"
          placeholder='confirm password'
          onIonChange={(e: any) => { setConfirmPassword(e.target.value)}}
        ></IonInput>
        <IonButton onClick={register}>Register</IonButton>
        <p>Already have an account? <Link to="/login" className="ion-padding">Login</Link></p>
        <p><Link to="/">Back Home</Link></p>
      </IonContent>

    </IonPage>
  );
};

export default Register;