import React from 'react';
import {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonText, IonButton, IonIcon, IonInput } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

import {star} from 'ionicons/icons'


const Home: React.FC = () => {

  const [input, setInput] = useState<string>('')

  useEffect(() => {
    // eslint-disable-next-line
    console.log(input)
  }, [input])

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
        <IonButton color="primary" routerLink="/login">
          <IonIcon slot="start" icon={star}></IonIcon>
          Login
        </IonButton>
        <IonButton color="secondary" routerLink="/register">
          <IonIcon slot="start" icon={star}></IonIcon>
          Register
        </IonButton>
        <IonInput 
          value={input}
          // eslint-disable-next-line
          onIonInput={(e: any) => setInput(e.target.value)}
          ></IonInput>
      </IonContent>

    </IonPage>
  );
};

export default Home;
