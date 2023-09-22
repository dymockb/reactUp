import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonButton, IonIcon, IonInput } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useSelector } from 'react-redux';
 

const Dashboard: React.FC = () => {

  const username = useSelector((state: any) => state.user.email )

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Hello {username}</p>
      </IonContent>

    </IonPage>
  );
};

export default Dashboard;