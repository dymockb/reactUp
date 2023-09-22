import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonButton, IonIcon, IonInput } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

//
const Dashboard: React.FC = () => {

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>Hello</p>
      </IonContent>

    </IonPage>
  );
};

export default Dashboard;