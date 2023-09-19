import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import {star} from 'ionicons/icons'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonList>
          {Array(4).fill(0).map((_,i) => (
            <IonItem key={i}>
              <IonText>List Item {i}</IonText>
            </IonItem>
          ))}
        </IonList>
        <IonButton color="primary">
          <IonIcon icon={star}></IonIcon>
          Button
          </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Home;
