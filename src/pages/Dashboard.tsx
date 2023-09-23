import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonToast, IonLoading } from '@ionic/react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router-dom';
import { setUserState } from '../redux/actions';
 
const Dashboard: React.FC = () => {

  const history = useHistory()

  const username = useSelector((state: any) => state.user.email )

  const [busy, setBusy] = useState<boolean>(false)

  const [present] = useIonToast();
  const dispatch = useDispatch()

  const presentToast = (message: string, duration = 2000) => {
   present({
      message, duration
    });
  }

  async function logout() {
    setBusy(true)
    const res = await logoutUser()
    console.log('res',res)
    if (res == true) {
      presentToast('You have logged out')
      dispatch(setUserState({email: username, auth: false}))
      history.push('/logout')
    } else {
      presentToast(res)
    }
    setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      {<IonLoading message="Please wait" duration={0} isOpen={busy}/>}
      <IonContent fullscreen>
        <p>Hello {username}</p>
      <IonButton onClick={logout} color="primary" routerLink="/logout">
        Logout
      </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Dashboard;