import React, {useState, useRef} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, useIonToast, IonLoading, IonList, IonItem, IonInput } from '@ionic/react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../firebaseConfig'
import { useHistory } from 'react-router-dom';
import { setUserState } from '../redux/actions';
import words from '../wordlist';
import { act } from '@testing-library/react';

type WordType = {
  word: string,
  done: boolean,
  correct: boolean  
}

const Dashboard: React.FC = () => {

  const history = useHistory()

  const username = useSelector((state: any) => state.user.email )

  const [busy, setBusy] = useState<boolean>(false)
  const [input, _setInput] = useState('')
  const [activeWordList, setActiveWordList] = useState<WordType[]>(words.map(word => ({word, done: false, correct: false})))
  const [activeWordIndex, setActiveWordIndex] = useState(0)

  const [present] = useIonToast();
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLIonInputElement>(null);

  const presentToast = (message: string, duration = 2000) => {
   present({
      message, duration
    });
  }

  async function logout() {
    setBusy(true)
    const res = await logoutUser()
    if (res == true) {
      presentToast('You have logged out')
      dispatch(setUserState({email: username, auth: false}))
      history.push('/')
    } else {
      presentToast(res)
    }
    setBusy(false)
  }

  function setInput(value: string) {
    if (inputRef.current){
      inputRef.current.value = value
    }
  }

  function setInputValue(value: string) {
    if (value.trim() == ""){
      setInput('')
    } else if (value[value.length -1] ==  " "){
      setActiveWordList(list => {
        const wordBlocks = [...list]
        if (wordBlocks[activeWordIndex]){
          wordBlocks[activeWordIndex] = {
            ...wordBlocks[activeWordIndex],
            done: true,
            correct: wordBlocks[activeWordIndex].word === value.trim()
          }
        } else {
          wordBlocks.push({
            word: 'all done',
            done: false,
            correct: true
          })
        }
        return wordBlocks
      })
      setActiveWordIndex((count) => {
        console.log(count)
        return count + 1
      })
      console.log('awi',activeWordIndex)
      setInput('')
    } else {
      setInput(value)
    }
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
        <p className="ion-padding">Hello {username}</p>
        <IonList >
        {activeWordList.map(wordBlock => {
          
          const isDone = wordBlock.done;
          const isCorrect = wordBlock.correct

          if (isCorrect) {
            console.log('correct')
            return <IonItem key={wordBlock.word}>{wordBlock.word}!</IonItem>  
          } else {
            console.log('nope')
            return <IonItem key={wordBlock.word}>{wordBlock.word}</IonItem>
          }
          })}
        </IonList>
        <IonInput 
        className="ion-padding"
        placeholder='start typing'
        ref={inputRef}
        onIonInput={(e: any) => setInputValue(e.target.value)}
        ></IonInput>
      <IonButton className="ion-padding" onClick={logout} color="primary">
        Logout
      </IonButton>
      </IonContent>

    </IonPage>
  );
};

export default Dashboard;